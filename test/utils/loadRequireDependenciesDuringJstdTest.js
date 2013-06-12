
// TODO: add this to the writeup, explain why a higher order function.
// Asynchronous loading via require etc.


/**
 * 
 */
function configureForRequireUnderJstd() {

   // shorten the waiting time before a test fails. Default 30s is too long since I'm only loading
   // locally hosted files. Half a second is plenty.
   jstestdriver.plugins.async.CallbackPool.TIMEOUT = 2000;

   require.config({
   
      // everything that will be brought in using require needs to be loaded from jstd,
      // these are exposed using a serve: in the jstestdriver which means they have to
      // be under the path /test - that's just how jstd defines it  
      baseUrl: "/test"
      
      // if we're loading something from naga, we need to get it from the src directory
      // since we running the debugging against uncompiled js source:
   ,  paths: {
         'naga':'naga/src',
         'bell':'bell/src'      
      }
      
      // all resources loaded via define should be defined using define and if not we 
      // have an error:
   ,  enforceDefine: true      
   });
      
}   


/**
 * A higher order function to create a test in jstd that waits for require to be
 * available before running
 * 
 * @param {String[]} dependencies
 * @param {Function} testFunction
 */
function testWithDependencies( dependencies, testFunction ) {

   // JSTestDriver's AsyncTestCase will call with a queue once it is
   // ready to run the asyncrhonous tests. We can add tests to that queue.
   return function runTestOnceDependenciesAreRun(testStepsQueue){

      var loadedDependencies;
      
      function storeLoadedDependencies(/* the dependencies that were just loaded will be passed in here */){
         loadedDependencies = arguments;
      }      

      // We add only a single item to jstd's queue,
      // which will be called by require once the dependencies are ready      
      testStepsQueue.call('ask require to load dependencies', function(jstdCallbacks) {
      
         // a function which when called will fail the current jstd test, cancelling all further
         // queue steps or expectation that any other callbacks will be called:
         var jstdErrback = jstdCallbacks.addErrback('Could not load dependencies via require');      
      
         require(dependencies, 
            jstdCallbacks.add(storeLoadedDependencies),
            function requireErrback( requireError ) {               

               jstdErrback('Failed to load modules:' + requireError.requireModules.join(',')
                  + ' because: ' + requireError.requireType);
            }
         );         
      });
      
      testStepsQueue.call('run the test with loaded dependencies', function() {
      
         testFunction.apply(null, loadedDependencies);         
      });      
      
   };

}

/**
   Most of the time a suite of tests will have the same dependencies,
   this allows the dependencies to be declared just once and passed to
   all the tests in the same suite.
 */
function DependentTestCase( suiteName, dependencies, tests ) {
   
   var AsyncTest = AsyncTestCase(suiteName);
   
   AsyncTestCase.prototype.setUp = configureForRequireUnderJstd; 

   //TODO: write as an ObjectMap from tests to testsMap
   for( var testName in tests ) {
      AsyncTest.prototype[testName] = testWithDependencies( dependencies, tests[testName] );
   }
}



/**
 * TODO:
 * might be better to have one callback which includes all the tests somwhow
 * as a future improvement, all those arguments to the test functions
 * are a bit repetative.
 *
 *    eg:
 *    testsWithDependencies2(
 *       'naga.woot',
 *       ['bell/givenWhenThen', 'blah', 'foo']
 *
 *       function tests(given, blah, foo){
 *
 *          return {
 *             'test something': function() {
 *                given(blah())
 *                   .when(foo)
 *                      .then(4);
 *             }
 *          ,  'test something else': function() {
 *                given(blah())
 *                   .when(foo(foo))
 *                      .then(6);
 *          };
 *       }
 *    }
 *
 *    Problem is, can't have those values until require has loaded but need to put tests on the case
 *    straight away
 *    Could maybe do this using steps in the same test?
 *       Loses ability to run just one though so probably not worth it
 */
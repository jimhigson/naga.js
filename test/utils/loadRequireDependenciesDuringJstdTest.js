
// TODO: add this to the writeup, explain why a higher order function.
// Asynchronous loading via require etc.


/**
 * 
 */
function configureForRequireUnderJstd() {

   // shorten the waiting time before a test fails. Default 30s is too long since I'm only loading
   // locally hosted files. Half a second is plenty.
   jstestdriver.plugins.async.CallbackPool.TIMEOUT = 500;

   require.config({
   
      // everything that will be brought in using require needs to be loaded from jstd,
      // these are exposed using a serve: in the jstestdriver which means they have to
      // be under the path /test - that's just how jstd defines it  
      baseUrl: "/test"
      
      // if we're loading something from naga, we need to get it from the src directory
      // since we running the debugging against uncompiled js source:
   ,  paths: {
         'naga':'naga/src'      
      }
   });
      
}   


/**
 * A higher order function to create a test in jstd that waits for require to be
 * available before running
 * 
 * @param {String[]} dependencies
 * @param {Function} testCaseFunction
 */
function testWithDependencies( dependencies, testCaseFunction ) {

   // JSTestDriver's AsyncTestCase will call with a queue once it is
   // ready to run the asyncrhonous tests. We can add tests to that queue.
   return function runTestOnceDependenciesAreRun(testStepsQueue){

      // We add only a single item to jstd's queue,
      // which will be called by require once the dependencies are ready
      
      testStepsQueue.call('ask require to load dependencies', function(jstdCallbacks) {
      
         require(dependencies, jstdCallbacks.add(testCaseFunction));
         
      });
      
   };

}

/**
   Most of the time a suite of tests will have the same dependencies,
   this allows the dependencies to be declared just once and passed to
   all the tests in the same suite.
 */
function testsWithDependencies( suiteName, dependencies, tests ) {

   console.log('about to create an AsyncTestCase with:', suiteName);
   var AsyncTest = AsyncTestCase(suiteName);

   //TODO: write as an ObjectMap from tests to testsMap
   for( var testName in tests ) {
      console.log('adding async test for ' + suiteName + testName);

      AsyncTest.prototype[testName] = testWithDependencies( dependencies, tests[testName] );
   }

   console.log('made it', AsyncTest);
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
 *    Could maybe do this using steps in the same test?
 */
function testsWithDependencies2( suiteName, dependencies, tests ) {
}
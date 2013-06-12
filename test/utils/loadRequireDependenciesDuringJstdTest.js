
// TODO: add this to the writeup, explain why a higher order function.
// Asynchronous loading via require etc.


/**
 * 
 */
function configureRequireForRunningUnderJstd() {

   require.config({
   
      // everything that will be brought in using require needs to be loaded from jstd,
      // these are exposed using a serve: in the jstestdriver which means they have to
      // be under the path /test - that's just how jstd defines it  
      baseUrl: "/test"
   });
   
   /*
      could add some paths for 'naga', 'bell' etc here:      
   ,  paths: {
         "some": "some/v1.0"
      }
   */   
}   

/**
 * Provide a URL that Require can be used that includes the file on the special path that we set
 * up as a load: clause in the test loading config.
 * 
 * This has no relevance on the running of the code other than that I want to be able to run using
 * essentially two javascript lazy-loading libraries: jsTestDriver and require.js
 * 
 * <code>
 *    // inside a test do this:
 * 
 *    require([fromNaga('identity')], callbacks.add(function(identity){
 *    
 *       // should now have identity
 *    }));
 * </code>
 * 
 * @param fileName
 */
function fromNaga( fileName ) {
   return 'naga/src/' + fileName;
}

/**
 * A higher order function to create a test in jstd that waits for require to be
 * available before running
 * 
 * @param dependencies
 * @param testCase
 */
function testWithDependencies( dependencies, testCase ) {

   // JSTestDriver's AsyncTestCase will call with a queue once it is
   // ready to run the asyncrhonous tests. We can add tests to that queue.
   return function runTestOnceDependenciesAreRun(jstdQueue){

      console.log('we have been given a queue');

      // We add only a single item to jstd's queue,
      // which will be called by require once the dependencies are ready
      
      jstdQueue.call('ask require to load dependencies', function(jstdCallbacks) {
         require(dependencies, jstdCallbacks.add(testCase));
      });
      
      // TODO: split into two queue items for easier debugging
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
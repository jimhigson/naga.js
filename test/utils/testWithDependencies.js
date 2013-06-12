function testWithDependencies( dependencies, testCase ) {

   // JSTestDriver's AsyncTestCase will call with a queue once it is
   // ready to run the asyncrhonous tests. We can add tests to that queue.
   return function runTestOnceDependenciesAreRun(queue){

      debugger;
      console.log('we have been given a queue');

      // we have the queue. For each queue we add only a single item,
      // which will be called by require once the dependencies are ready
      queue.call( function(callbacks) {
         require(dependencies, callbacks.add( testCase ));
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
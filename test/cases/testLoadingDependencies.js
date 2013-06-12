

AsyncTestCase('testLoadingDependencies', {

   // shorten the waiting time before a test fails. Default 30s is too long:
   setUp: function(){
      jstestdriver.plugins.async.CallbackPool.TIMEOUT = 1000;
      
      configureRequireForRunningUnderJstd();
      
   }

,  testSmokeTestThatTestsAreRunning: function() {
      assertTrue(true);
   }
   
,  testLoadTestsWithDependenciesDirectlyViaRequire: function(testStepsQueue) {

      testStepsQueue.call('ask require to load a dependency', function( callbacks ){
      
         debugger;
         
         // In the interests of seperation of concerns under test, load identity since that's 
         // the simplest function provided by Naga. 
         require([fromNaga('identity')], callbacks.add(function(identity) {
      
            debugger;
      
            jstestdriver.console.log("got the id function", identity);      
         
            // We don't want to test that the identity functions works as described, just that it is now
            // available as a function:
            assertEquals( "function", typeof identity );         
         }));      
      });
           
   }   

});      


/*
var QueueTest = AsyncTestCase('QueueTest');

console.log('will make an async test here');
debugger;

QueueTest.prototype.testSomething = function(queue) {
  var state = 0;

  queue.call('Step 1: assert the starting condition holds', function() {
    assertEquals(0, state);
  });

  queue.call('Step 2: increment our variable', function() {
    ++state;
  });

  queue.call('Step 3: assert the variable\'s value changed', function() {
    assertEquals(1, state);
  });
};
*/
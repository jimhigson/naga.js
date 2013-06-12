console.log('this should be a very simple test');

var tc = AsyncTestCase('example', {

   testSmokeTestThatTestsAreRunning: function() {
      assertTrue(true);
   }
   
,  testLoadTestsWithDependencies: function() {

      jstestdriver.console.log("JsTestDriver", "Hello World!");

      assertTrue(true);
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
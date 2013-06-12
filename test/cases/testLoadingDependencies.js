

AsyncTestCase('testLoadingDependencies', {

   setUp: configureForRequireUnderJstd

   /**
    * Getting tests to run at all while loading via require needs a bit of code, some config
    * and more than a little nuance.
    * 
    * Here we test that we can load something without actually testing very much about that thing.
    */   
,  testLoadTestsWithDependenciesDirectlyViaRequire: function(testStepsQueue) {

      testStepsQueue.call('ask require to load a dependency', function( callbacks ){
               
         // In the interests of seperation of concerns under test, load identity since that's 
         // the simplest function provided by Naga. 
         require(['naga/identity'], callbacks.add(function(identity) {
      
                                 
            // We don't want to test that the identity functions works as described, just that it has been
            // loaded correctly. That it has the correct name should suffice.
            assertEquals( 'identity', identity.name );         
         }));      
      });
           
   }

   /**
    * You might notice that the above test is quite a lot of boilerplate for rather a small
    * amount of assertions. Here we run the same test again but via a utility function that
    * abstracts away the boilerplate.
    * 
    * Note that here we have to write very little extra to make an asynchronous test with
    * async dependencies over we'd have to write for a statically loaded test.
    */
,  testLoadTestsWithDependenciesViaHigherLevelFunction:
 
      testWithDependencies(['naga/identity'], function(identity){
                                             
         assertEquals( 'identity', identity.name );         
      }) 
});

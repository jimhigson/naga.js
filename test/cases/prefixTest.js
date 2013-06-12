testsWithDependencies( 'Naga.prefix',
   ['bell/givenWhenThen', 'naga/prefix'],
   {
      testForMathematicalAddition: function(given, prefix) {
         given( prefix('+') )
            .when(calledWith(1,2))
            .then(2);
      }

   ,  testForTernaryAddition: function(given, prefix) {
         given( prefix('+') )
            .when(calledWith(1,2,3))
            .then(6);
      }

   ,  testForStringConcatenation: function(given, prefix) {
         given( prefix('+') )
            .when(calledWith("Foo", "Bar"))
            .then("FooBar");
      }

   ,  testTernaryArguments: function(given, prefix) {
         given( prefix('+') )
            .when(calledWith(2,2,2))
            .then(6);
      }


   ,  testNaryArguments: function(given, prefix) {

         given( prefix('+') )
            .when(
               forAll({n:'integer'}, function(testFunction, n){

                  // add integers from 0 to n
                  return testFunction( numbers().from(0).to(n) );

               })
            ).then(
               forEachResult()
            );
      }
   }
);
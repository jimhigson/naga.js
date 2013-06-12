
testsWithDependencies('Naga.prefix1',

   ['bell/givenWhenThen', 'naga/prefix1'],

    {
      'testSomething':function(){}
    }
/*
    {
       testForNegatingAPositiveNumber: function() {
          given( prefix1('-') )
             .when(calledWith(3))
             .then(-3);
       }

    ,  testForNegatingANegativeNumber: function() {
          given( prefix1('-') )
             .when(calledWith(-3))
             .then(3);
       }
    }
*/

);

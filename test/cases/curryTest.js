(function() {

   // can can eval take a toString-able thing? In which case can also support this:

   // a simple function to test currying, multiplies three arguments
   var productOf3 = function (a, b, c ) {
      return a * b * c;
   };

   AsyncTestCase("Naga.curry", {

      'test productOf3 works as intended':
         testWithDependencies(['bell/givenWhenThen'], function(given){

             console.log(given);

             given( productOf3(2,3,4) )
                .then( 24 );
         }),

      // TODO: need to cover .apply and .call as well as 'normal' calling
      'test calling with all args in single-argument style': function() {
         given( curry(productOf3) )
            .when(calledWith(2)(3)(4))
            .then(24);
      },

      'test curry function is still a function': function() {
         given( curry(productOf3) )
            .then()  // no args = identity function
               .is(ofType(Function));
      },

      'test curry function is still a function after being partially completed': function() {
         given( curry(productOf3) )
            .when(calledWith(anyNumber))
            .then()
               .is(ofType(Function));
      },

      'test curried version still allows calling with all args in one call': function() {
         given( curry(productOf3) )
            .when(calledWith(2,3,4)).then(24);
      },

      'test calling with two arguments curried in': function() {
         given( curry(productOf3) )
            .when(calledWith(2,3)(4))
            .then(24);
      },

      'test calling with one argument curried in': function() {
         given( curry(productOf3) )
            .when(calledWith(2))
            .when(calledWith(3,4))
            .then(24);
      },

      'test calling sequentially in single-argument style': function() {
         given( curry(productOf3) )
            .when(calledWith(2))
            .when(calledWith(3))
            .when(calledWith(4))
            .then(24);
      },

      'test currying in too many values fails': function() {
         given( curry(productOf3) )
            .when(calledWith(2)(3)(4)(5))
            .then(shouldHaveErrored);
      },

      'test currying in too zero values fails': function() {
         given( curry(productOf3) )
            .when(calledWith())
            .then(shouldHaveErrored);
      }

   ,  'test errors thrown in original function are propagated': function() {
         given( curry(productOf3) )
            .when(calledWith(2)('b')(4))
            .then(shouldHaveErrored);
      }

   ,  'test function with no set number of arguments allows specification of cardinality': function() {

         given(curry(prefix('*'), 2))
            .when(calledWith(128))
            .then(256);
      }


   });

})();
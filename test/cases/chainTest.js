/*testsWithDependencies(
   'Naga.chain'
,  ['bell/givenWhenThen', 'naga/template', 'bell/shouldFail']

,  {  'test chain works with single arguments': function(given, template) {
         var foodMessage = template("I {attitude} eating {food}");

         given(chain( "I(attitude).eating(food)", foodMessage )).
            when( function(I) {
               return I('enjoy').eating('beetroot');
            })
            .then(equalTo("I enjoy eating beetroot" ));
      }

   ,  'test chain works with multiple arguments at a stage': function(given, template){
         var foodMessage = template("I {attitude} eating {description} {food}");

         given(chain( "I(attitude).eating(description, food)", foodMessage )).
            when( function(I) {
               return I('enjoy').eating('red', 'beetroot');
            })
            .then(equalTo("I enjoy eating red beetroot" ));
      }

   ,  'test chained functions fail if called with too many arguments': function(given, template, shouldFail){
         var foodMessage = template("I {attitude} eating {description} {food}");

         given(chain( "I(attitude).eating(description, food)", foodMessage )).
            when( function(chained) {
               return chained('enjoy','red', 'beetroot');
            })
            .then(shouldFail);
      }
   }
); */

DependentTestCase(
   'naga-chain'
,  ['naga/chain']

,  {  
      'test chain works with single arguments': function(chain) {
         var underlying = function(attitude, food) {
            jstestdriver.console.log(attitude, food);
         };

         var chained = chain( "I(attitude).eating(food)", underlying );
         
         chained.I('like').eating('spinich');
      }

   }
);
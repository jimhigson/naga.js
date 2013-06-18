
DependentTestCase(
   'Naga.airity',
   ['naga/airity', 'naga/identity', 'naga/lift', 'naga/add'],
   {
      /*'test simple template':function (given, template) {

         given(template('{day} will be {weather}'))
            .when(calledWith('today', 'rainy'))
               .then(equalTo('today will be rainy'));
      }*/
      
      'test length is correct':function (airity, identity, lift, add) {
      
         var binaryIdentity = airity(2, identity);
      
         assertEquals(2, binaryIdentity.length); 
      }
      
   ,  'test function does the same with airity 1':function (airity, identity, lift, add) {

         var four = airity(1, lift(4));
      
         assertEquals(4, four()); 
      }
      
   ,  'test function does the same with airity 2':function (airity, identity, lift, add) {

         var add = airity(2, add);
      
         assertEquals(9, add(4,5)); 
      }
      
   ,  'test can copy the airity of another function':function (airity, identity) {

         var binaryFunction = function(a,b){return a+b};
         
         var binaryIdentity = airity(binaryFunction, identity);
         
         assertEquals(2, binaryIdentity.length);          
      }                        
   }
);


/* 'test throwError':function() {

       given(Bell.throwError('{part} has {failureDesc}'))
           .when(calledWith('cpu', 'melted'))
           .then(Naga.compose(
               exceptionThrown,
               hasKey('message'),
               equalTo('cpu has melted')
           ));
   }

   }); */



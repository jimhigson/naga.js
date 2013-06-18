
DependentTestCase(
   'Naga.apply',
   ['naga/apply'],
   {
      'test apply works':function (apply) {
      
         function add(a, b){         
            return a + b;         
         }
       
       
         assertEquals(3, apply(add, [1,2]));
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



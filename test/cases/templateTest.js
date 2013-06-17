
DependentTestCase(
   'Naga.template',
   ['bell/givenWhenThen', 'naga/template'],
   {
      /*'test simple template':function (given, template) {

         given(template('{day} will be {weather}'))
            .when(calledWith('today', 'rainy'))
               .then(equalTo('today will be rainy'));
      }*/
      
      'test simple template':function (given, template) {

         var t = template('{day} will be {weather}');
         
         assertEquals('Friday will be Sunny', t('Friday', 'Sunny')); 
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



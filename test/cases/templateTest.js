
testsWithDependencies(
   'Naga.template',
   ['Bell/givenWhenThen', 'Naga/template'],
   {
      'test simple template':function () {

         given(template('{day} will be {weather}'))
            .when(calledWith('today', 'rainy'))
               .then(equalTo('today will be rainy'));
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



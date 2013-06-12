(function() {

   testsWithDependencies( 'arrayIterator',

      [  'bell/givenWhenThen'
      ,  'naga/arrayIterator',
      ,  'naga/calledRepeatedly'
      ],

      {  'test iterator gets first item correct':function (given, arrayIterator) {

            given(arrayIterator(['un', 'deux', 'tois']))
               .when(called)
                  .then(equalTo('un'));
         }

      ,  'test fails past end of array':function (given, arrayIterator, calledRepeatedly) {

            given(arrayIterator(['un', 'deux', 'tois']))
               .when(calledRepeatedly().forever())
                  .then(thereIsAnError);
         }

      ,  'test iterator returns all items':function (given, arrayIterator, calledRepeatedly) {

            given(arrayIterator(['un', 'deux', 'tois']))
               .when(calledRepeatedly().untilFailure())
                  .then(equalTo(['un', 'deux', 'tois']));
         }

      ,  'test handles zero-length array correctly':function (given, arrayIterator) {

            given(arrayIterator([]))
                .when(called)
                .then(thereIsAnError);
         }
      }
   );


})();
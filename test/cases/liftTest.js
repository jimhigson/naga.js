testsWithDependencies( 'Naga.lift',

    ['bell/givenWhenThen', 'naga/calledRepeatedly'],
    {
       'test returns value when called':function (given, _calledRepeatedly) {

          given(Naga.lift('x'))
             .when(called)
                .then(equalTo('x'));
       }

    ,  'test returns value when called repeatedly':function (given, calledRepeatedly) {

          given(Naga.lift('x'))
             .when(calledRepeatedly().times(5))
                .then(equalTo(['x','x','x','x','x']));
       }

      // TODO: this would be a good candidate for
      // quickcheck-style definition, eg define for all values
   }
);
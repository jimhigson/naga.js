(function () {

   AsyncTestCase("Naga.argumentsAsList", {

      'test something':
         testWithDependencies(
            [  'bell/givenWhenThen',
               'naga/identity',
               'naga/callWith'
            ],
            function (given, identity) {

               given( argumentsAsList(identity) )
                   .when( calledWith(1,2,3) )
                   .then( equalTo([1,2,3]) );

            })

/*
      'test something else':function () {

         // TODO: spy on all g/w/t methods with Sinon.js automatically

         given( emptyFunction )
             .when( argumentsAsList )
             .and( calledWith(1,2,3) )
             .then( theSubject() )          // theSubject() - gives the thing evaluated by fg
             .was( calledWith([1,2,3] ));   // all g/w/t methods are spied so no need to spy explicity
      } */
   });

})();
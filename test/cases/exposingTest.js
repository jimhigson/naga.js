/*
with( Naga.exposing('equalTo', 'hasKey') ) {

   given( Naga.exposing('calledWith', 'given') )
      .then( hasKey('calledWith').withValue( equalTo(Naga.calledWith)) )
      .then( hasKey('given').withValue(equalTo(Naga.given)) );

}
*/
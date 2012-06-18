
var productOf3 = function (a, b, c ) {
   return a * b * c;
};

eval(Naga.import('calledWith', 'given'));

// can can eval take a toString-able thing? In which case can also support this:
with(Naga.import('calledWith', 'given')) {


}

given( productOf3(2,3,4) )
   .then( 24 );

given( productOf3.curryable() )
   .when(calledWith(2)(3)(4))
   .then(24);

given( productOf3.curryable() )
   .when(calledWith(2,3,4)).then(24);

given( productOf3.curryable() )
   .when(calledWith(2,3))
   .when(calledWith(4))
   .then(24);

given( productOf3.curryable() )
   .when(calledWith(2))
   .when(calledWith(3,4))
   .then(24);

given( productOf3.curryable() )
   .when(calledWith(2))
   .when(calledWith(3))
   .when(calledWith(4))
   .then(24);
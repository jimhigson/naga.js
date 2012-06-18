
var Naga = {};

given(2)
   .when(adding(2))
   .then(4); // passes!

given(2)
   .when(adding(2))
   .then(isEven); // passes!

given(2)
   .when(adding(2))
   .then(5); // fails. Error should be "

function toVal( val ) {
   if( typeof val == 'function' ) {
      return toVal( val() );
   } else {
      return val;
   }
}


// given-when-then is basically functional composition. Here is a repetative and non-general purpose (non-reusable)
// composition:

Naga.given = function( somethingGiven ) {
   return {
      when: function( somethingWhen ) {
         return {
            then: function( somethingThen ) {
               return then( when( given() ) );
            }
         };
      }
   };
};

// the above can't handle exceptions gracefully, the thing that throws the exception will have to create the whole
// message even though this state is unlikely to be available to it.

function adding(a, b) {
   try {
      return a + b;
   } catch(e) {
      throw "something " + a;
   }
}

/*
 * return a curryable version of f
 */
Naga.curryable = function( f ) {

   return function( /* args */ ) {
      var args = argArray(arguments);

      if( args.length == f.length ){
         return f.apply( this, args );
      } else {

         return function() {
            args = args.concat( argArray(arguments) );

            if( args.length == f.length ){
                return f.apply( this, args );
            }
         };
      }
   }
}

function argArray(arguments) {
   return Array.prototype.slice.apply(arguments);
}


function lastFrom(array) {
   return array[array.length -1];
}

function allButLastFrom(array) {
   return Array.prototype.slice.apply(array, 0, array.length -2);
}

function calledWith( /* ...args... , */ ) {
   var f = lastFrom(arguments);
   var args = allButLastFrom(arguments);

   f.apply(null, args);
}













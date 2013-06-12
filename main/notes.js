/*

// given-when-then is basically functional composition. Here is a repetative and non-general purpose (non-reusable)
// composition:

Naga.given = function( somethingGiven ) {
   return {
      when: function( somethingWhen ) {
         return {
            then: function( somethingThen ) {
               return somethingThen( somethingWhen( somethingGiven() ) );
            }
         };
      }
   };
};

// The above isn't very general purpose. Also, then is given the result of evaluating when but not the function itself,
// therefore it is unable to catch any errors that arise from it. Nor can somethinWhen see errors from somethingThen,
// or any of the three somethingXXX functions catch errors from each other. The root cause of this is the functions
// do not evaluate each other, there is a central location - a single line of code - from which all execution is
// dispatched. A better model would be to use late evaluation so that the functions are given a function which they then
// execute. Can this be called lazy evaluation? Probably not.


// the above can't handle exceptions gracefully, the thing that throws the exception will have to create the whole
// message even though this state is unlikely to be available to it.

/*
function adding(a, b) {
   try {
      return a + b;
   } catch(e) {
      throw "something " + a;
   }
}

*/















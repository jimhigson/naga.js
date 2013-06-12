/**
 * NOTE:
 * 
 * This is purely functional. No state.
 */

define([], function(){

   /**
    * A function which returns its first argument
    *
    * @param {*} a
    */
   return function identity(a){
      return a;
   };

// Naga.multipleIdentity = Naga.argumentsAsList( Naga.identity );
});
window.Naga = (function(Naga) {
   "use strict";

   var curry = Naga.curry;

   function argArray(argumentsObject) {
      return Array.prototype.slice.apply(argumentsObject);
   }

   function allButLastFrom(array) {
      return Array.prototype.slice.apply(array, 0, array.length -2);
   }

   function calledWith( /* ...args... , */ ) {
      var f = lastFrom(arguments);
      var args = allButLastFrom(arguments);

      f.apply(null, args);
   }


   /** converts the given function to accept an args array instead of the arguments list. Sometimes this is
    * simpler
    */
   var argumentsAsList =
   Naga.argumentsAsList = function( f ) {
      return f.call(this, argArray(arguments));
   };


   /**
    *
    */
   var subset =
   Naga.subset = curry(function(keys, object){

   });


   /* executes the condition, if returns true executes ifBranch, else
      executes elseBranch.

      Returns the value from whichever of ifBranch or elseBranch was called.
    */
   var disjunction = Naga.disjunction = function(condition, ifBranch, elseBranch) {
   };


   function raise() {

   }






   /** Given three values, a conditionFunction {Function}, an ifBranch {*} and an elseBranch {*},
       returns a new function. When called, this function will return either the ifBranch value or
       the elseBranch value depending on if the evaluation of conditionFunction returned truthy or
       falsey.

       This may be combined with solidify in the case where ifBranch and/or elseBranch are functions.
         Eg: <code>
            solidify( conditional( conditionFunction, functionA, functionB ) )
         </code>
    */
   var conditional =
   Naga.conditional =
      curry(function( conditionFunction, ifBranch, elseBranch ) {
         return conditionFunction.apply(this, arguments) ? ifBranch : elseBranch;
      });

   /* Given a function that always returns the same value, returns a version of that function
      which supports caching. That is, if it is called twice with the same parameters, on the
      first execution the return value will be stored; on subsequent executions the stored
      value will be returned rather than re-evaluating the function.
    */
   var cacheable =
   Naga.cacheable =
      function( fn ) {
         var cache = {};

         return function(){
            var cacheKey = this + '$$$' + Array.prototype.join.apply(arguments, '$$$');
            var returnValue = cache[cacheKey];

            if( returnValue === undefined ) {
               return cache[cacheKey] = fn.apply(this, arguments);
            } else {
               return returnValue;
            }
         };
      };



   return Naga;

})(window.Naga || {});
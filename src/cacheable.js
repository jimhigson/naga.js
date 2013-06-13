define([], function(){

   /* Given a function that always returns the same value, returns a version of that function
      which supports caching. That is, if it is called twice with the same parameters, on the
      first execution the return value will be stored; on subsequent executions the stored
      value will be returned rather than re-evaluating the function.
    */
   return function( fn ) {
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
   }
   
});   
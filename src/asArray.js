define([], function(){

   return function asArray(arrayLikeThing) {
      return Array.prototype.slice.apply(arrayLikeThing);
   }

});
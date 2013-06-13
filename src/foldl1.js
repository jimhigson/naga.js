define(
   ['naga/foldl', 'naga/head'],

   function(foldl, head) {

      /**
       * Like foldl but doesn't require a starter item
       * and only works for lists of length one or more.
       */
      return function foldl1( combiner, list ) {
         return foldl(combiner, head(list), tail(list));
      };

   }
);
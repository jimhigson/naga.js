define(

   ['naga/empty', 'naga/last', 'naga/allButLast'],
   function(empty, last, allButLast) {

      return function foldr( f, z, list ) {

         if( empty(list) ) {
         
            return z;

         } else {

            var x = last(list),
                xs = allButLast(list);

            return foldr( f, f(z, x), xs);
         }
      };
   }

);
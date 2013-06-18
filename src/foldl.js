define(

   ['naga/empty', 'naga/head', 'naga/tail'],
   function(empty, head, tail) {

      return function foldl( f, z, list ) {

         if( empty(list) ) {
            return z;

         } else {

            var x = head(list),
                xs = tail(list);

            return foldl( f, f(z, x), xs);
         }
      };
   }

);
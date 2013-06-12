define(

   ['./empty', './head', './tail'],
   function(empty, head, tail) {

      return function foldl( f, value, list ) {

         if( empty(list) ) {
            return value;

         } else {

            var x = head(list),
                xs = tail(list);

            return foldl( f, f(value, x), xs);
         }
      };
   }

);
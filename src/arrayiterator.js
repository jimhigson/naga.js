define(
   ['naga/lift'],
   function(lift){

      /**
       * Returns a function which, on subsequent calls returns
       * items from an array. Eg:
       *
       * <code>
       *    var iterator = Bell.arrayItterator(['foo', 'bar', 'baz'])
       *
       *    console.log( iterator() );  // prints 'foo'
       *    console.log( iterator() );  // prints 'bar'
       *    console.log( iterator() );  // prints 'baz'
       *    console.log( iterator() );  // prints undefined
       *
       *
       *    // alternatively, we might print every item in an array
       *    // by calling like:
       *
       *    while( var item = iterator() ) {
       *       console.log(item);
       *    }
       *
       * </code>
       *
       * @param array
       */
      return function( array, atEnd ) {

         var callCount = 0;

         // TODO: use Naga.defaults instead of ||
         // (write it first!)
         atEnd = atEnd || lift(undefined);

         return function() {
            if( callCount == array.length ) {
               return atEnd();
            }

            var returnValue = array[callCount];
            callCount++;
            return returnValue;
         };
      };
   }
);

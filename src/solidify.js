define(
   /**
    * Given a function, returns the value returned from executing that function.
    * Given any other value, solidify acts as the identity function and returns the
    * (single) value that was passed to it.
    *
    * This may be thought of as the inverse to Naga.lift, for example:
    *
    * TODO: test this properly!
    */
   function solidify( val ) {
      if( typeof val == 'function' ) {
         return solidify( val() );
      } else {
         return val;
      }
   }
);
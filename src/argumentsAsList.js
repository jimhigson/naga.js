define(

   ['naga/asArray'], 
   function(asArray){
   
      /** converts the given function to accept an args array instead of the arguments list. Sometimes this is
       * simpler
       */
      return function argumentsAsList( f ) {
      
         return function() {
            return f.call(this, asArray(arguments));
         }
      };

   
   }
);   
define(

   ['naga/asArray'], 
   function(asArray){
   
      /** converts the given function to accept an args array instead of the arguments list. Sometimes this is
       * simpler.
       * 
       * Call as either:
       * 
       *    argumentsAsList( f )
       *    
       * or:
       *    argumentsAsList( f, [a, b, c] )
       */
      return function argumentsAsList( f, preexisting ) {
      
         preexisting = preexisting || [];
      
         return function() {
            return f.call(this, preexisting.concat(asArray(arguments)));
         }
      };

   
   }
);   
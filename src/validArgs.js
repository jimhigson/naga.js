define(
   ['naga/airity', 'naga/argumentsAsList', 'naga/throwError'],
        
   // TODO: provide noop version of this for production code
   
   function(airity, argumentsAsList, throwError){
              
      return function ( spec, underlying ) {
      
         return airity(underlying, argumentsAsList(function ( argumentsList ) {
        
            // validate each argument. On failure, the spec should throw an
            // exception.
            spec(argumentsAsList);
            
            // TODO: could allow spec to return something different and then pass that through? 
                      
            // if no exceptions have been thrown, go through to the underlying:
            return underlying.apply(this, argumentsList);                       
         }));
      
      };               
   }
);
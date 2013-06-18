define(
   ['naga/airity', 'naga/argumentsAsList'],
        
   // TODO: provide noop version of this for production code
   
   function(airity, argumentsAsList){
              
      return function ( spec, underlying ) {
      
         return airity(underlying, argumentsAsList(function ( argumentsList ) {
        
            // validate each argument. On failure, the spec should throw an
            // exception.
            spec(argumentsAsList);
            
            // TODO: could allow spec to return something different and then pass that through?
            //forwardArguments = ifNot(spec(argumentsAsList)).then(argumentsAsList);
            // TODO: this could form a super-short argumentsAsList implementation 
                      
            // if no exceptions have been thrown, go through to the underlying:
            return underlying.apply(this, argumentsList);                       
         }));
      
      };               
   }
);
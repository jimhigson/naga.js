define(
   ['naga/throwError'],

   function(throwError){

      var noArgumentsProvided = throwError(
          'Attempt to partially complete with zero arguments provided'
      );

      var partialCompletionOfTooManyArguments = throwError(
          'Attempt to partially complete {numberOfArguments} argument(s) into function "{funcName}" ' +
          'with arity of {arity}'
      );

      function partialComplete(f, arity, argumentAccumulator ) {
         return function( args ) {

            if( args.length == 0 ) {
               noArgumentsProvided();
            }
         
            var accumulatedArguments = argumentAccumulator.concat( args );
            
            if( accumulatedArguments.length > arity ) {
          
               partialCompletionOfTooManyArguments(accumulatedArguments.length, f.name, arity);
            }
            
            if( accumulatedArguments.length == arity ) {
            
               return f.apply(null, accumulatedArguments);               
            } 
            
            return partialComplete(f, arity, accumulatedArguments);                           
         };
      }

      /**
       * Curry a function, optionally specifying the arity.
       * If the arity is not specified we will use the .length
       * property of the function.
       *
       * For functions that examine their arguments array, giving the
       * arity is required or unexpected behaviour is likely.
       *
       * @param f
       * @param [arity]
       */
      return function curry(f, arity) {
         if( !arity ) {
            arity = f.length;
         }

         return partialComplete(f, arity, []);
      };
   }
);
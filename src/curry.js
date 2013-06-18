define(
   ['naga/error/halt', 'naga/airity', 'naga/argumentsAsList'],
                    
   function(halt, airity, argumentsAsList){
      
      var noArgumentsProvided = halt(
             'Attempt to partially complete with zero arguments provided'
      );

      var partialCompletionOfTooManyArguments = halt(
             'Attempt to partially complete {numberOfArguments} argument(s) into function "{funcName}" ' +
             'with arity of {arity}'
      );
      
      var airityOfZero = halt('Attempt to curry function named "{funcName}" with airity ' +
          'of zero. This function isn\'t suitable to partial completion without specifying the' +
          'airity - how do we know when we have enough arguments to call the underlying function?' +
          'Try calling instead like: curry(2, f)');
      
      var notAFunction = halt('Attempt to curry something that is not a function');                

      function partialComplete(f, totalAirity, argumentAccumulator ) {
      
         var partialyCompleted = argumentsAsList(function( args ) {

            if( args.length == 0 ) {
               noArgumentsProvided();
            }
         
            var accumulatedArguments = argumentAccumulator.concat( args );
            
            if( accumulatedArguments.length > totalAirity ) {
          
               partialCompletionOfTooManyArguments(accumulatedArguments.length, f.name, totalAirity);
            }
            
            if( accumulatedArguments.length == totalAirity ) {
            
               return f.apply(null, accumulatedArguments);               
            } 
            
            return partialComplete(f, totalAirity, accumulatedArguments);                           
         });

         var remainingAirity = totalAirity - argumentAccumulator.length;
         
         return airity(remainingAirity, partialyCompleted);
      }

      /**
       * Curry a function, optionally specifying the arity.
       * If the arity is not specified we will use the .length
       * property of the function.
       *
       * For functions that examine their arguments array, giving the
       * arity is required or unexpected behaviour is likely.
       * 
       * TODO: Note on airity of curried functions
       *
       * @param f
       * @param [arity]
       */
      return function curry(f, maybeAirity) {
         if( !f instanceof Function ) {
            notAFunction();
         }
      
         var targetAirity = maybeAirity || f.length;
         
         if( targetAirity === 0 ) {
            airityOfZero();
         }

         return partialComplete(f, targetAirity, []);
      };
   }
);
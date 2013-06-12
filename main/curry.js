define(
   function(){

      function partialComplete(f, arity, argumentAccumulator ) {
         return function( args ) {
            var accumulatedArguments = argumentAccumulator.concat( args );

            if( args.length == 0 ) {
               throw new Error("Attempt to partially complete with zero arguments provided");
            }
            else if( accumulatedArguments.length > arity ) {
               throw new Error('Attempt to partially complete ' + accumulatedArguments.length +
                   ' arguments into function with airity of ' + arity );
            }
            else if( accumulatedArguments.length == arity ) {
               return f.apply(null, accumulatedArgs);
            } else {
               return partialComplete(f, arity, accumulatedArguments);
            }
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
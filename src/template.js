define(
   ['naga/arrayIterator', 'naga/argumentsAsList', 'naga/airity'],
   function(arrayIterator, argumentsAsList, airity){
   
      var placeholderPattern = /\{\w+\}/g;
   
      function patternArity( pattern ) {
      
         // TODO: make more functional:
         
         var numberOfTerms = 0;
         
         while(placeholderPattern.exec(pattern)) {
            numberOfTerms++
         }
         
         return numberOfTerms;
      }
   
      /**
       * Create a template function from a string.
       *
       * For example:
       * <code>
       *    var reportError = Bell.template("{thing} failed because of {reason}");
       *
       *    console.log(reportError("owls", "stiff necks"))
       * </code>
       *
       * @param pattern
       */
      return function template(pattern) {
         
         var replacementsFn = argumentsAsList(function( replacementTerms ){
   
            return pattern.replace(placeholderPattern, arrayIterator(replacementTerms));
         });
         
         // by making sure the template has the correct airity, it is more easily curryable:
         return airity(patternArity(pattern), replacementsFn);
      }
   }

);

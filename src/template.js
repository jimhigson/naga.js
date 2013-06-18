define(
           ['naga/curry', 'naga/arrayIterator', 'naga/argumentsAsList'],
   function(curry,             arrayIterator,        argumentsAsList ){
   
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
         var   replacementsFn = argumentsAsList(function( replacementTerms ){
   
                  return pattern.replace(placeholderPattern, arrayIterator(replacementTerms));
               });
         
         // return value is always curried
         return curry(replacementsFn, patternArity(pattern));
      }
   }

);

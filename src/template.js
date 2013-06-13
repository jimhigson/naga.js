define(
   ['naga/arrayIterator', 'naga/argumentsAsList'],
   function(arrayIterator, argumentsAsList){
   
      var PATTERN_EXPRESSION = /(\{\w+\})/g;
   
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
   
         return argumentsAsList(function( replacementTerms ){
   
            return pattern.replace(PATTERN_EXPRESSION, arrayIterator(replacementTerms));
         });
      }
   }

);

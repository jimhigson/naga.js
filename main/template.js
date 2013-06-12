define(

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
   function template(pattern) {

      return function(){
         var PATTERN_EXPRESSION = /(\{\w+\})/g;

         return pattern.replace(PATTERN_EXPRESSION, arrayIterator(arguemnts));
      };
   }

);

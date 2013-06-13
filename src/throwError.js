define(['naga/template'], function(template){

   /**
    * Create a new function. Like naga.template but throws an error instead of
    * returning a string
    *
    * For example:
    * <code>
    *    var reportError = Bell.template("{thing} failed because of {reason}");
    *
    *    try{
    *       reportError("owls", "stiff necks")
    *    } catch(e) {
    *       // e.message is "owls failed because of stiff necks".
    *    }
    * </code>
    *
    * @param pattern
    */
   return function throwError(pattern, ErrorClass) {

      // TODO: defaults function
      ErrorClass = ErrorClass || Error;

      var template = template(pattern);

      return function(){
         throw new ErrorClass( template.apply(null, arguments) );
      };
   };


});
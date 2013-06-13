define(
   ['naga/template'], 
   function(template){

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
   return function throwError(messagePattern, ErrorConstructor) {

      // TODO: defaults function
      ErrorConstructor = ErrorConstructor || Error;

      var messageTemplate = template(messagePattern);

      return function(){
         throw new ErrorConstructor( messageTemplate.apply(null, arguments) );
      };
   };

});
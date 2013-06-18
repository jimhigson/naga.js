define(
   ['naga/curry'], 
   function(curry){

   /**
    * Create a new function. Like naga.template but throws an error instead of
    * returning a string
    *
    * For example:
    * <code>
    *    var fail = throwError(template("{thing} failed because of {reason}"));
    *
    *       fail("owls", "stiff necks")
    *       // error will be thrown with message "owls failed because of stiff necks".
    *       
    *       fail("owls")("stiff necks")
    *       // same behaviour as above
    *
    * </code>
    *
    * @param pattern
    */
   return function throwError(messageTemplate, MaybeErrorConstructor) {
      
      var ErrorConstructor = MaybeErrorConstructor || Error;
      
      // WRITE ABOUT: similar to Maybe in Haskell if every "maybe-able" param gets called Maybe?
      // not really but at least followable.
      // ifNot( ErrorConstructor ).then( Error );

      var templateAirity = messageTemplate.length;
      
      return curry(function(){
               
         throw new ErrorConstructor( messageTemplate.apply(null, arguments) );
      }, templateAirity);
   };

});
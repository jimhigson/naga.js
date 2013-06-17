define([], function(){

   var passthrough = 
         'var args = Array.prototype.slice.call(arguments, 1);\n' +
         'return base.apply(this, args)';

   // TODO: could rename to functionLength? Seems a bit more specific than 
   // TODO: the usual concept of airity
   return function airity(n, baseFunction) {
   
      // first, we create some fake params just so we can get the desired .length
      // reported on the function.
      // TODO: more functional!
      var argumentNames = ['base'];
      
      for (var i = 0; i < n; i++) {
         argumentNames.push(String.fromCharCode('a'.charCodeAt(0) + i));         
      }       
         
      return createFunctionFromStrings(argumentNames, passthrough)               
               .bind(null, baseFunction);   
   };
  
   /**
    * @param {String[]} argumentNames
    * @param {String} functionText
    */
   function createFunctionFromStrings(argumentNames, functionText) {
   
      // TODO: with cons
      var spec = argumentNames;
      
      spec.push(functionText);
   
      return Function.apply(Function, spec);
   }

});
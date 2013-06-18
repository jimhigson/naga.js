define(

         ['require'/*, 'naga/template', 'naga/throwError'*/],
          
function(  require      /* _template,       _throwError */) {

   return function halt(templateText){
   
      return function() {

         // an error has happened. Time to load the modules that we need. Unlike the rest
         // of the app, this is done strictly at call-time. 
      
         var errorTemplate = require('naga/template')(templateText),
             throwError = require('naga/throwError')(errorTemplate);
         
         return apply(throwError, arguments);      
      }
   
   };

   function apply(f, as){
      f.apply(null, as);
   }

});
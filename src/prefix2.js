define(
   ['naga/error/halt', 'naga/template', 'naga/validArgs', 'naga/curry'],
   function(halt, template, validArgs, curry) {

      var combinerFuncTemplate = template('return a {symbol} b');
      
      /**
       */
      return function prefix2( symbol ) {

         var symbolAsFunction = new Function('a', 'b', combinerFuncTemplate(symbol)); 
                                    
         return curry( symbolAsFunction );
      };

   }
   
);


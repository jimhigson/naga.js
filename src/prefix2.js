define(
   ['naga/template', 'naga/curry', 'naga/throwError'],
   function(template, curry, throwError) {

      var combinerFuncTemplate = template('return a {symbol} b');
      var wrongNumberOfArguments = throwError(
         'expected exactly two arguments for symbol {symbol} but got {actualNumber}');

      /**
       */
      return function prefix2( symbol ) {

         var symbolAsFunction = new Function('a', 'b', combinerFuncTemplate(symbol));
         var wrongNumberOfArgumentsForThisSymbol = curry(wrongNumberOfArguments)(symbol);         
         
         // TODO: return validateArgs(, symbolAsFunction);
         
         return function(){
            if( arguments.length != 2 ) {
               wrongNumberOfArgumentsForThisSymbol(arguments.length);
            }
            
            return symbolAsFunction.apply(this, arguments);
         }
      };

   }
);
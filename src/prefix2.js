define(
   ['naga/template', 'naga/curry', 'naga/throwError', 'naga/validArgs'],
   function(template, curry, throwError, validArgs) {

      var combinerFuncTemplate = template('return a {symbol} b');
      var wrongNumberOfArguments = throwError(
         'expected exactly two arguments for symbol {symbol} but got {actualNumber}');

      /**
       */
      return function prefix2( symbol ) {

         var wrongNumberOfArgumentsForThisSymbol = curry(wrongNumberOfArguments)(symbol),
         
             symbolAsFunction = new Function('a', 'b', combinerFuncTemplate(symbol)),
         
             validateNumberOfArguments = function(args){
                args.length == 2 || wrongNumberOfArgumentsForThisSymbol(args.length);
             };
                                    
         return validArgs(validateNumberOfArguments, symbolAsFunction);         
      };

   }
   
   
);


define(
   ['naga/error/halt', 'naga/template', 'naga/validArgs'],
   function(halt, template, validArgs) {

      var combinerFuncTemplate = template('return a {symbol} b');
      
      var wrongNumberOfArgumentsForASymbol = halt('expected exactly two arguments for symbol "{symbol}" but got {actualNumber}');

      /**
       */
      return function prefix2( symbol ) {

         var wrongNumberOfArgumentsForThisSymbol = wrongNumberOfArgumentsForASymbol(symbol),
         
             symbolAsFunction = new Function('a', 'b', combinerFuncTemplate(symbol)); 
                                    
         return validArgs(
                  correctNumberOfArguments(2, wrongNumberOfArgumentsForThisSymbol), 
                  symbolAsFunction
         );         
      };

      function correctNumberOfArguments(n, onFail) {
        
         return function(args){
            args.length == n || onFail(args.length);
         };      
      
      }
   }
   
);


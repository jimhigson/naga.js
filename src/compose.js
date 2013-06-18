define(
           ['naga/identity', 'naga/argumentsAsList', 'naga/head', 'naga/tail', 'naga/apply'],
   function(      identify,        argumentsAsList,        head,        tail,        apply ){
         
      /**
       *  Compose two functions. returns a function that gives f(g(input))
       */         
      function compose2(f, g) {
      
         return function(){
            var bEvaluation = apply(g, arguments);
            
            return f(bEvaluation);
         }
      }

      /**
       * Compose one or more functions 
       */      
      function composeN(functionList) {
         
         var f = head(functionList),
             fs = tail(functionList);
         
         // is the tail is empty, the composition of one function is just the head:          
         if( fs.length == 0 ) {
            return f;      
         }         

         return compose2( f, composeN(fs) );      
      }
                      
      /**
       * Compose one or more functions, given as varargs.
       * 
       *    Eg: compose(f,g);
       *    Eg: compose(f,g,h);
       */                            
      return argumentsAsList( function compose(functionList) {
               
         // the compositions of zero functions provides an identity function:
         if( functionList.length == 0 ) {
            return identify;      
         }
         
         return composeN(functionList);      
      });
         
   }
);
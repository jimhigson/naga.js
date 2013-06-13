define(
   ['naga/identity', 'naga/head', 'naga/tail'],
   function( identify, head, tail ){
         
      /* compose two functions */         
      function compose2(functionA, functionB) {
         return function(){
            return functionA(functionB.apply(null, arguments));
         }
      }

      /* compose N functions where N > 0 */      
      function composeN(functionsList) {
         
         var head = head(functionsList);
         
         // the composition of one function is that function          
         if( functionsList.length == 1 ) {
            return head(functionsList);      
         }         

         return compose2( head, composeN(tail(functionsList)) );      
      }
                      
      return function compose() {
      
         var functionsList = Array.prototype.slice(arguments);
         
         // the compositions of zero functions provides an identity function:
         if( functionsList.length == 0 ) {
            return identify;      
         }
         
         return composeN(functionsList);      
      }
         
   }
);
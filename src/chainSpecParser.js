define([],
function(){ 
      
   function findTerms(spec) {
      // first, we'll need to parse the spec:
      var termPattern = /\w+\(.*?\)/g;
      
      var parseNextTerm = termPattern.exec.bind(termPattern, spec);
      
      //TODO: use an external iterator and value collector instead:
      var terms = [],
          hit;
     
      while( hit = termPattern.exec(spec) ){
         terms.push( hit[0] );            
      }
      
      return terms;
   }
   
   function findParamsInTerm(term) {
   
      //return term;
      
      return term.replace(/\(.*\)/, '');  
   
   }
   
   return function parse(spec) {
   
      return findTerms(spec).map( findParamsInTerm );
   
   };

});     
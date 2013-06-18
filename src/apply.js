define(
   [],
   function(){
      return function apply(f, as){
         f.apply(null, as);
      }
   }
);
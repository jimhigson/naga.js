define(
   [],
   function(){
      return function apply(f, as){
         return f.apply(null, as);
      }
   }
);
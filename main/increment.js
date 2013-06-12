define(
   ['./prefix', './partial'],
   
   function(prefix, partial) {

      return partial(prefix('+'), 1);
   }
);
define(

   /** given a function f, returns a version of f which first takes a number of arguments and returns
    *  a zero-argument function. On the next call, those arguments are applied to f.
    *
    *    Eg, late(mult)(2, 3) returns a function which returns the numberic value 6
    *    Eg, late(mult)(2, 3)() evaluates to 6
    *
    *  If an exception is thrown, it will be thrown on the zero-argument call, not on completing the
    *  arguments list
    *
    *  This may be combined with currying, for example:
    *
    *    late(curry(mult))(2)(3) returns a function which returns the numberic value 6
    *    late(curry(mult))(2)(3)() evaluates to 6
    *
    * or, can do curry-then-zero arg call as:
    * curry( late(f) );
    *
    * @param f
    */
   function(f) {
      return function(){
         var args = arguments;

         return function(){
            return f.apply(null, args);
         }
      };
   }

);
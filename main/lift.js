define(

    /**
     * Lifts a value up into a function which will always return
     * that value. This is useful when you have a value that you
     * wish to pass somewhere, but that somewhere expects a function
     *
     * <code>
     *    var uneventfulFn = Naga.lift('something happens');
     *
     *    console.log(uneventfulFn()); // logs 'something happens'
     *
     *    var uneventfulLogger = Naga.compose(console.log, uneventfulFn);
     *
     *    window.setTimeout(uneventfulLogger, 1000); // logs 'something happens' once per second
     *
     * </code>
     *
     * Naga.lift is also useful when creating polymorphic classes. Often it
     * is useful to have an implementation of a common interface which always
     * returns the same value.
     *
     * <code>
     *    // instead of this:
     *    SomeType.prototype.getFooCount = function(){
     *       // this particular type never has any foo:
     *       return 0;
     *    }
     *
     *    // we can write this more simply as:
     *    SomeType.prototype.getFooCount = Naga.lift(0);
     * </code>
     */
   function lift( val ) {

      // TODO: optimise for non-object case using new Function?

      return function() {
         return val;
      }
   }
);
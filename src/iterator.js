define(
    /** 
     * A generic external iterator generator.
     * 
     * As an external iterator, it is the caller's responsibility to repeatedly call the
     * function returned by iterator().
     * 
     * The provided iterator provides no way to specify an exit condition so it is the 
     * job of the caller to know when to stop calling it.
     *
     * <code>
     *   var add = prefix('+');
     *   var addOne = partial(add, 1);
     *   var numberFountain = iterator(0, addOne);
     *
     *   numberFountain() // returns 1
     *   numberFountain() // returns 2
     *   numberFountain() // returns 3
     * </code>
     *
     * TODO: could this be used to iterate over an array? Doesn't have a separate concept of 
     * index and current value.
     * 
     **/
    function iterator( startValue, nextFunction ) {

      var currentState = startValue;

      return function iter() {
         currentState = nextFunction(currentState);

         return currentState;
      };

    }
);
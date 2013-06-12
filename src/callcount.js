define(
   ['./increment', './iterator'],

   function(increment, iterator) {

      /**
       * Returns a function which returns only the number
       * of times that it has been called.
       *
       * var iter = increment();
       * iter() // returns 1
       * iter() // returns 2
       * iter() // returns 3
       *
       */
      return iterator(0, increment);
   }
);
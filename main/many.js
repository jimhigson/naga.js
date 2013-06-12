define(
   ['./iterator'],
   
   function(iterator) {

      /**
       * A generator for generic internal iterators.
       *
       * As an internal iterator, the functions returned will call the callback until
       * the endCondition is met
       * 
       * Continues calling the iterator, passing the result to the callback
       * until the endFunction returns falsey.
       *
       * <code>
       *
       *   // log every number from 0 to 99
       * 
       *   var lessThan100 = partial(prefix('<'), 100);
       *   var increment = partial(prefix('+'), 1);
       *
       *   many(console.log, 0, increment, lessThan100);
       *
       * </code>
       * 
       * TODO: could this be used to iterate over an array? Doesn't have a separate concept of 
       * index and current value.
       * 
       * TODO: this could be split into nextIndex and valueForIndex
       * 
       */
      return function many(callback, startValue, nextFunction, terminalCondition ) {
                   
         var currentState = startValue;                                      
                   
         do{         
            currentState = nextFunction( currentState );

            callback(currentState);

         }while( !!terminalCondition(currentState) );

      }

   }
);
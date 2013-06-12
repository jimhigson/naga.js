define(
   ['./template', './cacheable', './argumentsAsList', './fold'],
   function(template, cacheable, argumentsAsList, fold) {

      var combinerFuncTemplate =
            template('return arguments[0] {symbol} arguments[1]');

      /**
       * Convert from a built-in langugae infix operator
       * to a normal prefix-type function.
       *
       * <code>
       *    var add = prefix('+'),
       *        mult = prefix('*'),
       *        moreThan = prefix('>'),
       *
       *        accessValue = prefix('.'),
       *
       *        equals = prefix('==');
       *
       *
       *    add(1,2);   // returns 3
       *
       *    mult(2,3);  // returns 6
       *    mult(2,3,4);  // returns 24
       *
       *    moreThan(1,2);  // returns false
       *
       *    var plants = {trees:2, flowers:8);
       *    accessValue(plants, 'trees'); // returns 2
       *
       *    var plants =
       *          {
       *             trees:
       *                {number:2, type:'oak'},
       *             flowers:
       *                {number:4, type:'petaly'}
       *          };
       *    accessValue(plants, 'trees', 'type'); // returns oak
       *
       *    equals(add(1,1), 2); // returns true
       *
       * </code>
       */
      return function prefix( symbol ) {

         var combiner = new Function(combinerFuncTemplate(symbol));

         return argumentsAsList( function(argumentList) {

            return foldl1(combiner, argumentList);
         });
      };

   }
);
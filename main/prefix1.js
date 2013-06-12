define(
   ['./template'],
   function(template) {

      var functionExprTemplate = template('return {symbol}arguments[0];');

      /**
       * Like Naga.prefix but for single-argument built-in operands,
       * or any string which can be placed before an argument to create
       * a meaningfull expression.
       *
       * <code>
       *    var negate = prefix1('-');
       *    negate(3); // returns -3
       *    negate(-3); // returns 3
       *
       *    var toBool = prefix('!!');
       *    toBool(null); // returns false
       *    toBool({}); // returns true
       *
       *    var toString = prefix('""+');
       *    toString(3); // returns "3";
       * </code>
       */
      return function prefix1( symbol ) {
         return new Function(functionExprTemplate(symbol) );
      };

   }
);
define(
   ['naga/template'],
   function(template) {

      var combinerFuncTemplate = template('return a {symbol} b');

      /**
       */
      return function prefix2( symbol ) {

         return new Function('a', 'b', combinerFuncTemplate(symbol));
      };

   }
);
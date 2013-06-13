define(
   [/*'naga/curry'*/],
   function(curry) {

      /**
       * Creates a curried function with a chainable syntax, for easier readability.
       *
       * Eg, using Naga.inline we can create a multiplication function:
       *
       * <code>
       *    function multiply = inline('*');
       *
       *    console.log(multiply(2,2)) // logs 4 to the console
       * </code>
       *
       *
       * We can declare a chainable-curryable version of this function as such:
       *
       * var multiply = Naga.chain( "multiply(x).by(y)", multiply );
       *
       * This can not be called as:
       *
       * <code>
       *    console.log( multiply(2).by(2) );
       * </code>
       *
       * This may be used to create more readable logic from the caller side. For example
       * consider this function:
       *
       * <code>
       * function plant( fluffy, spiky, tasty ) {
       *    ... implementation
       * }
       * </code>
       *
       * From the caller side the meaning is non-obvious:
       * <code>
       *    var conker = plant( false, true, false )
       *    var apple = plant( false, false, true )
       * </code>
       *
       * Chaining self-documention by generating a builder-style function:
       *
       * <code>
       * var plant = Naga.chain(
       *                'plant().withFluff(fluff).withSpikes(spikes).withTastiness(tasty)',
       *                function( fluffy, spiky, tasty ) {
       *                   ... implementation
       *                });
       * </code>
       *
       * This can now be called as:
       *
       * <code>
       * var conker = plant().withFluff(false).withSpikes(true).withTastiness(false);
       * var apple = plant().withFluff(false).withSpikes(false).withTastiness(true);
       * </code>
       *
       * @param spec
       * @param baseFunction
       */
      return function( spec, baseFunction ) {


         // the implementation in here should pretty much just be curry with a new call style
         console.warn('chain is unimplmented!');
         return baseFunction;

      };

   }
);

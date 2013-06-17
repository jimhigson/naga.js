/**
 * Creates a curried function with a chainable syntax, for easier readability.
 *
 * Eg, using Naga.inline we can create a multiplication function:
 *
 * <code>
 *    function multiply = prefix2('*');
 *
 *    console.log(multiply(2,2)) // logs 4 to the console
 * </code>
 *
 *
 * We can declare a chainable-curryable version of this function as such:
 *
 * var multiply = Naga.chain( "multiply(x).by(y)", prefix2('*') );
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

define(
   ['naga/chainSpecParser', 'naga/curry', 'naga/head', 'naga/tail', 'naga/argumentsAsList', 'naga/singletonMapping', 'naga/identity'],
   function(parse, curry, head, tail, argumentsAsList, singletonMapping, identity) {
            
      /**
       * The recursive implementation behind the publicly exposed function.
       * 
       * Recursively builds up a callable form of the given function pased on the terms
       * provided.
       */
      function termsToChainedFunction( terms, f, argumentsAlreadyProvided, packaging ) {
                  
         var wrappedFunction = wrappedForChaining(terms, f, argumentsAlreadyProvided);              

         return packaging( wrappedFunction, terms );                     
      }

      /**
       * One of two possible values as the packaging parameter given to termsToChainedFunction.
       * Does no actual packaging of the function, just returns it as if. 
       * 
       * This is provided for the outermost recursive call since for that call no object is 
       * required to be created
       * 
       * @param {String[]} terms
       * @param {Function} f
       */
      var packageAsFunction = identity;
      
      /**
       * One of two possible values as the packaging parameter given to termsToChainedFunction.
       * 
       * This is provided for all but the outermost recursive call. It packages the function up
       * as a singleton map to allow a semantic call style.
       * 
       * @param {String[]} terms
       * @param {Function} f
       */      
      function packageAsObjectProperty(f, terms) {
         return singletonMapping( head(terms), f )      
      }      
      
      function wrappedForChaining(terms, f, argumentsAlreadyProvided) {
      
         return argumentsAsList( link(terms, f), argumentsAlreadyProvided );         
      }
            
      function link(terms, f) {       
        
         if( terms.length === 1 ) {
         
            return function(argumentsSoFar) {
                        
               return f.apply( null, argumentsSoFar );
            };
            
         } else {
         
            return function(argumentsSoFar, newArguments){
            
               // TODO: check newArguments against arity
               // TODO2: make some arguments optional
                        
               return termsToChainedFunction(tail(terms), f, argumentsSoFar, packageAsObjectProperty);
            }; 
         }
      }                  
           
           
      return function( spec, baseFunction ) {
      
         var terms = parse(spec);
         
         return termsToChainedFunction(terms, baseFunction, [], packageAsFunction);                      
      };           
   }
);

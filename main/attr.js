define(

    /**
     * TODO: n-arguments
     *
     * @param {String} name
     */
    function attr( name ) {
       return function( obj ){
          return obj[name];
       };
    }
);
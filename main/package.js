var moduleNames = ['attr', 'curry'];

define(moduleNames, function(){

   var Naga = {},
       modules = arguments;

   moduleNames.forEach( function( moduleName, i ){

      Naga[moduleName] = modules[i];

   });

   return Naga;

});
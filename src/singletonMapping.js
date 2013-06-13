define([],function(){

   return function singletonMapping(key, value) {
      var rtn = {};
      rtn[key] = value;
      return rtn;
   }

});
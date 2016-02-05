(function(){

'use strict';
angular.module('d3Module', []).factory('d3', [
  function(){
    var d3;
    d3 = window.d3;
    // returning our service so it can be used
    return d3;
}]);

//service to return the bitcoin candian exchange history
angular.module('app').factory('cbixService',function($http){
  return {
    getHistory: function(){
      return $http.get('https://api.cbix.ca/v1/history');
    }
  }
});

})();
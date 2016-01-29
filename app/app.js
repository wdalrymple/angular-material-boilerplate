(function(){
	'use strict';
	angular.module('app',[
		'ngMaterial',
		'ngRoute',
		'ngAnimate',		
		'nvd3',
		'ngMdIcons'
	]).config(function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl:"app/components/home/home.html",
				controller:"homeController",
				controllerAs:"vm"
			});
	}).controller('mainController', function () {
		var vm = this;
        vm.title = "sample app";		
    });;
})();
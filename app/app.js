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
			})
			.when('/questionaire/:questionNumber',{
				templateUrl:"app/components/questionaire/questionaire.html",
				controller:"questionaireController",
				controllerAs:"vm"
			})
			.when('/portfolio/',{
				templateUrl:"app/components/portfolio/portfolio.html",
				controller:"portfolioController",
				controllerAs:"vm"
			});			
			
	}).controller('mainController', ['$mdSidenav',function ($mdSidenav) {
		var vm = this;
        vm.title = "SAMPLE APP";	
		vm.openLeftMenu = function(){
			$mdSidenav("left").toggle();
		};	
    }]);
})();
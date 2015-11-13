var app = angular.module('cerrajero', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider.
		state('services', {
			url: '/services',
			templateUrl: 'partials/services.html'
		}).
		state('contact', {
			url: '/contact',
			templateUrl: 'partials/contact.html'
		}).
		state('home', {
			url: '/home',
			templateUrl: '/partials/home.html'
		});
}]);

app.controller('MainCtrl', function ($scope) {

});
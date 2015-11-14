var app = angular.module('cerrajero', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider.
		state('home', {
			url: '/',
			templateUrl: './partials/home.html'
		}).
		state('contact', {
			url: '/contact',
			templateUrl: './partials/contact.html'
		}).
		state('services', {
			url: '/services',
			templateUrl: './partials/services.html'
		});
}]);

app.controller('MainCtrl', function ($scope) {

});
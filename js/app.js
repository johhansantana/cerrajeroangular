var app = angular.module('cerrajero', ['ngRoute']);

	app.config([function ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider.
			when('/services', {
				template: 'partials/services.html'
			}).
			when('/contact', {
				template: 'partials/contact.html'
			}).
			when('/home', {
				template: 'partials/home.html'
			}).
			otherwise({
				redirectTo: '/home',
				template: 'partials/home.html'
			});
	}]);

function MainCtrl ($scope) {

};
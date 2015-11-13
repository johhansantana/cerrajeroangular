var app = angular.module('cerrajero', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(false);
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

app.controller('MainCtrl', function ($scope) {

});
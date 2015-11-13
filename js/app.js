var app = angular.module('cerrajero', []);

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when('/services', {
				templateUrl: 'partials/services.html'
			})
			when('/contact', {
				templateUrl: 'partials/contact.html'
			});
	}]);

function MainCtrl ($scope) {

};
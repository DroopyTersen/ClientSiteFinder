(function(angular) {
	var myApp = angular.module('myApp', []);

	myApp.directive('instasearch', clientSiteFinder.instasearchDirective);
	myApp.factory('siteService', clientSiteFinder.siteService);
	myApp.controller('finderController', clientSiteFinder.finderController);

})(angular);
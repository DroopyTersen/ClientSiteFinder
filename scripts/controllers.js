var clientSiteFinder = clientSiteFinder || {};

clientSiteFinder.finderController = function($scope, siteService) {
	$scope.message = "yo whatsup"; 
	siteService.init("https://my.skylinetechnologies.com");
	$scope.updateSites = function(searchText) {
		siteService.getSites(searchText).then(function(sites) {
			$scope.sites = sites;
		});
	};
};
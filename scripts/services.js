var clientSiteFinder = clientSiteFinder || {};
clientSiteFinder.siteService = function($q) {
	//var data = JSON.parse(response);
	var siteRows = response.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;
	var sites = siteRows.map(function(row){
		var site = {
			title: row.Cells.results[2].Value,
			url: row.Cells.results[3].Value
		};
		return site;
	});
	var getSites = function(searchText) {
		var deferred = $q.defer();
		setTimeout(function() {
			var siteResults = sites.filter(function(site){
				return site.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
			});
			deferred.resolve(siteResults);
		}, 1);
		return deferred.promise;
	};

	return {
		getSites: getSites
	};
};
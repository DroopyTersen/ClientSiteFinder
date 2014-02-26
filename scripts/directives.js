var clientSiteFinder = clientSiteFinder || {};

clientSiteFinder.instasearchDirective = function () {
	return {
		template:"<div class='form-group'>" +
					"<label>Search for client site</label>" +
					"<input ng-model='searchText' class='form-control' placeholder='Start typing...'/>" +
				"</div>",
		scope: {
			updateevent: '&'
		},
		link: function(scope, elem, attr) {
			elem.on('keyup', function(e){
				scope.updateevent({searchText: scope.searchText});
			});
		}
	};
};
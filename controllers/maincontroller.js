function mainController($scope, $location) {
	console.log('Nothing to see here (hopefully)');
	console.log(':-)');
	$scope.changeView = function(viewName) {
    	$location.path(viewName);
  	};

	$scope.getURLParam = function(paramName) {
		var results = new RegExp('[\?&]' + paramName + '=([^&#]*)').exec(window.location.href);
		if (results == null){
			return null;
		} else{
			return results[1] || 0;
		}
	};
}
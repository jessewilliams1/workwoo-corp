function loginController($scope, User) {
	$scope.loginInfo = {};
	$scope.loginSubmitting = false;
	$scope.loginFailed = false;

	$scope.loginSubmit = function(loginInfo) {
		$scope.loginSubmitting = true;
		User.login(loginInfo,
		  function(userProfile){
		  	window.location = CONFIG.BASE_URL;
		  },
		  function() {
		  	$scope.loginFailed = true;
		  	$scope.loginSubmitting = false;
		  	$('#loginButton').addClass('shake');
			setTimeout(function(){
				$('#loginButton').removeClass('shake');
			},500);

		  }
		);
	};
}
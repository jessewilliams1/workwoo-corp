function forgotPasswordController($scope, User) {
	$scope.resetInfo = {};
	$scope.formSubmitting = false;

	$scope.forgotPassword = function(email) {
		$scope.formSubmitting = true;

		User.requestPasswordReset(email,
			function(response){
		  		$scope.changeView('forgotpassword/submitted');
		  	},
			function() {
				$scope.formSubmitting = false;
				$scope.changeView('forgotpassword/submitted');
			}
		);
	}
}
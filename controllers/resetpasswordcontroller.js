function resetPasswordController($scope, User) {
	$scope.resetInfo = {};
	$scope.resetSubmitting = false;
	$scope.noMatch = false;
	$scope.invalidPassword = false;
	$scope.resetError = false;

	$scope.passwordRuleValid = function(passwordRule) {
		if(!$scope.resetInfo.newPassword) {
			return false;
		}
	    // Password Rules: 
	    //  1. At aleast one number
	    //  2. At least one lowercase letter
	    //  3. At least one uppercase letter
	    //  4. At least six characters total
	    var pattern = '';
	    if(passwordRule == 'lowerCase') {
	    	pattern = /(?=.*[a-z])/;
	    } else if(passwordRule == 'upperCase') {
	    	pattern = /(?=.*[A-Z])/;
	    } else if(passwordRule == 'number') {
	    	pattern = /(?=.*\d)/;
	    } else if(passwordRule == 'special') {
	    	pattern = /(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%*()_+^&]*$/
	    } else if(passwordRule == 'minimum') {
	    	pattern = /(?=^.{8,32}$)/;
	    }
    	return pattern.test($scope.resetInfo.newPassword);
	};

	$scope.resetPassword = function(resetInfo) {
		// First, check to see if the password confirmatino matches
		if(resetInfo.newPassword != resetInfo.newPasswordConfirm) {
			$scope.noMatch = true;
			$('#submitButton').addClass('shake');
			setTimeout(function(){
				$('#submitButton').removeClass('shake');
			},500);
			return;
		}

		// Then, make sure it passes our password complexity rules
		if(!$scope.passwordRuleValid('upperCase') || !$scope.passwordRuleValid('lowerCase') || !$scope.passwordRuleValid('number') || !$scope.passwordRuleValid('special') || !$scope.passwordRuleValid('minimum')) {
			$('#submitButton').addClass('shake');
			setTimeout(function(){
				$('#submitButton').removeClass('shake');
			},500);
			$scope.invalidPassword = true;
			return;
		}

		// Finally, ensure that a token is present 
		var token = $scope.getURLParam('t');
		if(!token) {
			$scope.resetError = true;
			$('#submitButton').addClass('shake');
			setTimeout(function(){
				$('#submitButton').removeClass('shake');
			},500);
			return;
		}

		return;
		User.resetPassword(resetInfo.newPassword, token,
		  function(result){
		  	$scope.changeView('resetpassword/submitted');
		  },
		  function() {
		  	$scope.resetError = true;
		  }
		);
	};
}
function signupController($scope, User) {
	log.info('signupController');
	$scope.signupInfo = {};
	$scope.signupSubmitting = false;
	$scope.passwordFocused = false;

	$scope.passwordRuleValid = function(passwordRule) {
		if(!$scope.signupInfo.newPassword) {
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
    	return pattern.test($scope.signupInfo.newPassword);
	};


	$scope.signup = function(signupInfo) {
		var newAccount = {
			accountName: signupInfo.companyName,
			firstName: signupInfo.firstName,
			lastName: signupInfo.lastName,
			email: signupInfo.userEmail,
			newPassword: signupInfo.newPassword,
			newPasswordVerify: signupInfo.newPasswordConfirm,
		};

		User.signup(newAccount,
			function(response){
		  		// After signup, login and redirect to the app
				User.login({ emailAddress: newAccount.email, password: newAccount.newPassword },
					function(userProfile){
						window.location = CONFIG.BASE_URL;
					},
					function() {
						$scope.changeView('signup/submitted');
					}
				);
		  	},
			function() {
				$scope.changeView('signup/submitted');
			}
		);
	};


}
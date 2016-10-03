function homeController($scope) {
	$scope.signupInfo = {};
	$scope.mailingSignupInfo = {};
	$scope.mailingSignupSubmitting = false;

	$scope.startFeedbackDemo = function() {
		$("#liveText").typed({
		  strings: ['I\'m worried about what\'s going to happen <br>to my department after the aquisition'],
		  typeSpeed: 20
		});
		setTimeout(function(){
			$scope.clickFeedbackDemoButton();
		}, 6000);
	};

	$scope.clickFeedbackDemoButton = function() {
		$('#leavingFeedbackPointer').addClass('movePointer');
		$('#leavingFeedbackClicker').addClass('moveClicker');
      	setTimeout(function(){
      		$('#leavingFeedbackClicker').css('opacity', '1');
      		setTimeout(function(){
      			$('#leavingFeedbackButton').css('background-color', '#4cb469');
	      		setTimeout(function(){
	      			$('#leavingFeedbackButton').css('background-color', '#56df7d');
	      			$('#demoContainer').addClass('demoContainerHide');
	      			setTimeout(function(){
      					$('#leavingFeedbackPointer').removeClass('movePointer');
						$('#leavingFeedbackClicker').removeClass('moveClicker');
						$('#leavingFeedbackClicker').css('opacity', '0');
						$("#liveText").html('')
	      				$('#previewImage').show();
      					$('#previewImage').addClass('previewImageShow');
	      			},500);
	      		},250);
      		},500);
      	},2000);
	};

	$scope.mailingSignup = function() {
		log.info('Mailing Signup');
	};

	$scope.initializeHomeController = function(){
		setTimeout(function(){
			// Show the mailing list signup form
			$('#emailSubscribeModal').modal('show');

			// When the mailing list popup is closed, start the demo animation
			$('#emailSubscribeModal').on('hidden.bs.modal', function () {
				setTimeout(function(){
					$scope.startFeedbackDemo();
				},1000);
			})
		},400);
	};

	$scope.initializeHomeController();

}
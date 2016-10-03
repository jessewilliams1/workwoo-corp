var CorpSite = angular.module('CorpSite', ['ngRoute', 'ngAnimate']);

// Controllers & Factories
CorpSite.controller('mainController', mainController);
CorpSite.controller('staticController', staticController);
CorpSite.controller('homeController', homeController);
CorpSite.controller('loginController', loginController);
CorpSite.controller('forgotPasswordController', forgotPasswordController);
CorpSite.controller('resetPasswordController', resetPasswordController);
CorpSite.controller('signupController', signupController);
CorpSite.controller('contactController', contactController);

CorpSite.factory('User', User);

CorpSite.config(function($routeProvider) {
	$routeProvider.when('/', { templateUrl : 'views/home.html', controller  : 'homeController'});
	$routeProvider.when('/home', { templateUrl : 'views/home.html', controller  : 'homeController'});
	$routeProvider.when('/submitted', { templateUrl : 'views/submitted.html', controller  : 'homeController'});
	$routeProvider.when('/login', { templateUrl : 'views/login.html', controller  : 'loginController'});
	$routeProvider.when('/forgotpassword', { templateUrl : 'views/forgotpassword.html', controller  : 'forgotPasswordController'});
	$routeProvider.when('/forgotpassword/submitted', { templateUrl : 'views/forgotpasswordsubmitted.html', controller  : 'staticController'});
	$routeProvider.when('/resetpassword', { templateUrl : 'views/resetpassword.html', controller  : 'resetPasswordController'});
	$routeProvider.when('/resetpassword/submitted', { templateUrl : 'views/resetpasswordsubmitted.html', controller  : 'staticController'});
	$routeProvider.when('/signup', { templateUrl : 'views/signup.html', controller  : 'signupController'});
	$routeProvider.when('/signup/submitted', { templateUrl : 'views/signupsubmitted.html', controller  : 'staticController'});
	$routeProvider.when('/contact', { templateUrl : 'views/contact.html', controller  : 'contactController'});
	$routeProvider.when('/contact/submitted', { templateUrl : 'views/contactsubmitted.html', controller  : 'staticController'});


});
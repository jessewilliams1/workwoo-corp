/* ######################### USER ######################### */
function User($http) {
  var User = {};
  User.login = function (credentials, onSuccess, onFail) {
    $http.defaults.headers.common.Authorization = 'Basic ' + window.btoa(credentials.emailAddress + ':' + credentials.password);
    $http({ url: CONFIG.BASE_URL + '/login', method: 'POST', withCredentials: true})
      .then(function success(response) {
        var user = response.data;
        onSuccess(user);
      },
      function fail(response){
        onFail();
      }
    );
  };

  User.requestPasswordReset = function(emailAddress, onSuccess, onFail) {
    $http({ url: CONFIG.BASE_URL + '/requestPasswordReset', method: 'POST', data: { emailAddress: emailAddress } })
      .then(function success(response) {
        onSuccess(response.data);
      },
      function fail(response) {
        onFail();
      }
    );
  };

  User.resetPassword = function(newPassword, token, onSuccess, onFail) {
    $http({ url: CONFIG.BASE_URL + '/resetPassword', method: 'POST', data: { newPassword: newPassword, token: token } })
      .then(function success(response) {
        onSuccess(response.data);
      },
      function fail(response) {
        onFail();
      }
    );
  };

  User.signup = function (newAccountInfo, onSuccess, onFail) {
    $http({ url: CONFIG.BASE_URL + '/signup', method: 'POST', data: newAccountInfo })
      .then(function success(response) {
        onSuccess(response.data.result);
      },
      function fail(response) {
        log.error('User.signup: Fail');
        onFail();
      }
    );
  };

  return User;
}
angular.module('app').component('login', {
    templateUrl: '/security/login.html',
    controller: function ($scope, $location) {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                // var isAnonymous = user.isAnonymous;
                // var uid = user.uid;
                $scope.$apply(function () {
                    $location.path("/home");
                });
            }
        });

        this.anonLogin = function () {
            auth.signInAnonymously()
                .catch((function (err) {
                    this.errorMessage = err.code;
                }).bind(this));
        };
    }
});
angular.module('app').component('login', {
    templateUrl: '/security/login.html',
    controller: function ($scope, $location, auth) {
        auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                // var isAnonymous = user.isAnonymous;
                // var uid = user.uid;
                $scope.$apply(function () {
                    $location.path("/home");
                });
            }
        });

        var applyError = function (err) {
            $scope.$apply(function () {
                this.errorMessage = err.code;
            }.bind(this));
        }.bind(this);

        this.anonLogin = function () {
            auth().signInAnonymously()
                .catch(applyError);
        };

        this.fbLogin = function () {
            auth().signInWithPopup(new auth.FacebookAuthProvider())
                .catch(applyError);
        };
    }
});

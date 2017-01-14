angular.module('app').component('home', {
    templateUrl: '/home/home.html',
    controller: function ($scope, $location, $firebaseObject) {
        auth.onAuthStateChanged(function (user) {
            if (!user) {
                // User is signed out.
                $scope.$apply(function () {
                    $location.path("/login");
                });
            }
        });

        var syncObject = $firebaseObject(ref);
        syncObject.$bindTo($scope, "data");
    }
});

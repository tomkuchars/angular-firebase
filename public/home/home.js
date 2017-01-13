angular.module('app').component('home', {
    templateUrl: '/home/home.html',
    controller: function ($scope, $firebaseObject) {
        var ref = firebase.database().ref();
        var syncObject = $firebaseObject(ref);
        syncObject.$bindTo($scope, "data");
    }
});

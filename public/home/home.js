angular.module('app').component('home', {
    templateUrl: '/home/home.html',
    controller:function($scope, $firebaseObject) {
    var ref = firebase.database().ref();
    // download the data into a local object
    $scope.data = $firebaseObject(ref);
    // putting a console.log here won't work, see below
})
    controller: function (rootRef) {
        rootRef.on('value', function () {
            console.log('connected')
        })
    }
});
//https://github.com/firebase/angularfire/blob/master/docs/quickstart.md
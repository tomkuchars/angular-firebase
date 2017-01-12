var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/home', {
            template: '<home></home>'
        })
        .otherwise('/home')
});
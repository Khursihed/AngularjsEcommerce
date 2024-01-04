// app.js
var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.message = 'Hello, AngularJS!';
    adminApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/login.html',
                controller: 'login'
            })
          
    });
    
});

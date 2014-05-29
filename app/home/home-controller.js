'use strict';
var home = angular.module('AngularChromeAppShowcase').
    controller('rightAngles.HomeController', [
        "$scope",
        function ($scope) {
        }
    ]);
home.config(function ($stateProvider) {
    $stateProvider.
        state('home', {
            url: "/home",
            templateUrl: 'home/home.html'
        });
});

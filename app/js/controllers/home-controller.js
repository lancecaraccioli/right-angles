'use strict';

var home = angular.module('AngularChromeAppShowcase').
    controller('HomeController', [
        "$scope",
        function ($scope) {}
    ]);

home.config(function ($stateProvider) {
    $stateProvider.
        state('home', {
            url: "/home",
            templateUrl: 'partials/home.html'
        });
});

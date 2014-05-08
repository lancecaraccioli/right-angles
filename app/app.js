'use strict';

var AngularChromeAppShowcase = angular.module('AngularChromeAppShowcase', [
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
]);

AngularChromeAppShowcase.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
});




'use strict';
(function(){
    var App = angular.module('RightAnglesShowcase', [
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'mgcrea.ngStrap',
        'rightAngles.theme',
        'showcase',
        'showcase.angularUiBootstrap',
        'rightAngles.navbar'
    ]);

    App.directive('appNav', function(){
        return {
            replace:true,
            restrict: 'EAC',
            templateUrl: 'app-nav.html'
        }
    });

    App.directive('appMenu', function(){
        return {
            replace:true,
            restrict: 'E',
            templateUrl: 'app-menu.html'
        }
    });
})();

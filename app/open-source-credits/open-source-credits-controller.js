'use strict';
angular.module('AngularChromeAppShowcase').
    controller('OpenSourceCreditsController', [
        "$scope",
        "appInfo",
        function ($scope, appInfo) {
            $scope.appInfo = appInfo;
        }
    ]);


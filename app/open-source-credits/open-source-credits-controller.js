'use strict';
angular.module('RightAnglesShowcase').
    controller('OpenSourceCreditsController', [
        "$scope",
        "appInfo",
        function ($scope, appInfo) {
            $scope.appInfo = appInfo;
        }
    ]);


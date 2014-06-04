'use strict';
angular.module('rightAngles.theme').
    controller('rightAngles.themeController', [
        "$scope",
        "rightAngles.themeService",
        function ($scope, themeService) {
            /**
             * Changes the current theme
             *
             * @todo save selected theme to users google profile if available (fallback to local storage)
             * @param theme
             */
            $scope.selectTheme = function (theme) {
                themeService.selectTheme(theme);
                $scope.changeTheme(theme);
            };

            $scope.changeTheme = function(theme){
                $scope.selectedTheme = theme;
                $scope.$emit('theme:chosen');
            };

            var initialStatePromise = themeService.getStorageState();
            initialStatePromise.then(function(selectedTheme){
                $scope.themes = themeService.getThemes();
                $scope.changeTheme(selectedTheme);
            }, function(reason){
                console.warn('Failed to retrieve Initial Theme State from storage. Reason:%s', reason);
            }, function(update){
                //progress currently do nothing
            });

        }
    ]);


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
                $scope.selectedTheme = themeService.getSelectedTheme();
                $scope.$emit('theme:chosen');
            };

            $scope.themes = themeService.getThemes();

        }
    ]);


(function () {
    'use strict';
    angular.module('theme').
        controller('theme.themeController', [
            "$scope",
            "theme.themeService",
            function ($scope, themeService) {
                /**
                 * Changes the current theme
                 *
                 * @todo save selected theme to users google profile if available (fallback to local storage)
                 * @param {String} theme
                 */
                $scope.selectTheme = function (theme) {
                    themeService.selectTheme(theme);
                    $scope.changeTheme(theme);
                };

                $scope.changeTheme = function (theme) {
                    $scope.selectedTheme = themeService.getTheme(theme);
                    $scope.dropdown = {selectedName: $scope.selectedTheme.name};
                    $scope.$emit('theme:chosen');
                };

                $scope.themes = themeService.getThemes();

                var initialStatePromise = themeService.getStorageState();
                initialStatePromise.then(function (selectedTheme) {
                    $scope.changeTheme(selectedTheme);
                }, function (reason) {
                    console.warn('Failed to retrieve Initial Theme State from storage. Reason:%s', reason);
                }, function (update) {
                    //progress currently do nothing
                });

            }
        ]);
})();

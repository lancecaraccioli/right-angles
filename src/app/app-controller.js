(function () {
  'use strict';
  angular.module('RightAnglesShowcase').
    controller('AppController', [
      "$scope",
      "$state",
      "rightAngles.appInfo",
      "theme.themeService",
      "rightAngles.navbarService",
      function ($scope, $state, appInfo, themeService, navbarService) {
        $scope.appInfo = appInfo;
        $scope.showMenu = false;
        $scope.nav = {
          items: navbarService.getItems(),
          brand: navbarService.getBrand()
        };
        $scope.hasDropdownMenu = function (navItem) {
          return navbarService.hasDropdownMenu(navItem);
        };
        $scope.getDropdownMenuTemplateUrl = function (navItem) {
          return navbarService.getDropdownMenuTemplateUrl(navItem);
        };

        $scope.navItemSelected = function (navItem) {
          if (!$scope.hasDropdownMenu(navItem)) {
            navbarService.selectItem(navItem);
            $state.go(navItem.name);
          }
        };
        $scope.$on('theme:chosen', function () {
          $scope.selectedThemeName = themeService.getSelectedTheme().name;
        });
        $scope.selectedThemeName = themeService.getSelectedTheme().name;
        $state.go('home');
      }
    ])
    .config(function ($stateProvider) {
      $stateProvider
        .state('showcases', {//todo use constant "rightAngles.showcase.STATES".ROOT,
          url: "/showcase",
          views: {
            "appBody": {
              templateUrl: 'showcase/showcase.html'
            }
          }
        })
        .state('home', {
          url: "/home",
          views: {
            "appBody": {
              templateUrl: 'home/home.html'
            }
          }
        })
        .state('coverage', {
          url: "/coverage",
          views: {
            "appBody": {
              templateUrl: 'reports/coverage/PhantomJS 1.9.7 (Linux)/index.html'
            }
          }
        });
    });
})();

'use strict';
angular.module('RightAnglesShowcase').
    controller('AppController', [
        "$scope",
        "$state",
        "rightAngles.appInfo",
        "rightAngles.themeService",
        function ($scope, $state, appInfo, themeService) {
            $scope.appInfo = appInfo;
            $scope.showMenu=false;
            $scope.nav = {
                items: [
                    {"name": "home", "heading": "", "glyph": "home"},
                    {"name": "showcases", "heading": "Showcase", "glyph": "briefcase"}
                ]
            };
            $scope.navItemSelected = function (navItem) {
                $state.go(navItem.name);
            };
            $scope.$on('theme:chosen', function(){
                $scope.themeName = themeService.getSelectedTheme().name;
            });
            $scope.themeName = themeService.getSelectedTheme().name;
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
    });


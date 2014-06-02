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
                    {"name": "showcase", "heading": "Showcase", "glyph": "briefcase"}
                ]
            };
            $scope.navItemSelected = function (navItem) {
                $state.go(navItem.name);
            };
            $scope.$on('theme:chosen', function(){
                $scope.themeName = themeService.getSelectedTheme().name;
                console.log('theme was chosen:%s', $scope.themeName);
            });
            $scope.themeName = themeService.getSelectedTheme().name;

        }
    ])
    .config(function ($stateProvider) {
        $stateProvider
            .state('showcase', {
                url: "/showcase",
                views: {
                    "app-body": {
                        templateUrl: 'showcase/showcase.html'
                    },
                    "app-menu": {
                        templateUrl: 'theme/theme-menu.html'
                    }
                }
            })
            .state('home', {
                url: "/home",
                views: {
                    "app-body": {
                        templateUrl: 'home/home.html'
                    },
                    "app-menu": {
                        templateUrl: 'theme/theme-menu.html'
                    }
                }
            })

    });


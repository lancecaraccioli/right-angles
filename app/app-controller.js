'use strict';
angular.module('AngularChromeAppShowcase').
    controller('rightAngles.AppController', [
        "$scope",
        "rightAngles.appInfo",
        "$state",
        function ($scope, appInfo, $state) {
            $scope.appInfo = appInfo;
            $scope.themes = [
                {"name": "amelia", "heading": "Amelia"},
                {"name": "cerulean", "heading": "Cerulean"},
                {"name": "cosmo", "heading": "Cosmo"},
                {"name": "cyborg", "heading": "Cyborg"},
                {"name": "darkly", "heading": "Darkly"},
                {"name": "flatly", "heading": "Flatly"},
                {"name": "journal", "heading": "Journal"},
                {"name": "lumen", "heading": "Lumen"},
                {"name": "readable", "heading": "Readable"},
                {"name": "simplex", "heading": "Simplex"},
                {"name": "slate", "heading": "Slate"},
                {"name": "spacelab", "heading": "Spacelab"},
                {"name": "superhero", "heading": "Superhero"},
                {"name": "united", "heading": "United"},
                {"name": "yeti     ", "heading": "Yeti"}
            ];
            $scope.nav = {
                name: 'top-nav',
                items: [
                    {"name": "home", "heading": "", "glyph": "home"},
                    {"name": "showcase", "heading": "Showcase", "glyph": "briefcase"}
                ],
                menus: [
                    {"name": "settings", "heading": "", "glyph": "cog"}
                ]
            };
            //this needs to be reworked
            $scope.appInfo.theme = $scope.themes[10];
            $scope.navItemSelected = function (navItem) {
                $state.go(navItem.name);
            };
            $scope.navItemSelected = function (navItem) {
                $state.go(navItem.name);
            };
            $scope.themeSelected = function (theme) {
                $scope.appInfo.theme = theme;
            }
        }
    ]);


'use strict';
(function(){
    angular.module('rightAngles.showcase')
        .controller('rightAngles.ShowcaseController', [
            "$scope",
            "$state",
            "$stateParams",
            "rightAngles.showcaseService",
            "rightAngles.showcase.STATES",
            function ($scope, $state, $stateParams, showcaseService, showcaseStateNames) {
                function redirectToDemo(){
                    var demoState = {
                        showcase:showcaseService.getSelectedShowcase().name,
                        demo: showcaseService.getSelectedDemo().name
                    };
                    $scope.selectedShowcase = showcaseService.getSelectedShowcase();

                    $state.go(showcaseStateNames.DEMO, demoState);
                }

                $scope.showcases = showcaseService.getShowcases();

                $scope.showcaseSelected = function (showcase) {
                    showcaseService.selectShowcase(showcase);

                    redirectToDemo();
                };
                $scope.showcaseRawSelected = function (showcase) {
                };
                $scope.demoRawSelected = function (demo) {
                };
                $scope.demoSelected = function (demo) {
                    showcaseService.selectDemo(demo);

                    redirectToDemo();
                };

                redirectToDemo();
            }
        ]).config(function ($stateProvider) {
            $stateProvider.
                state('showcases.showcase', {
                    url: "/:showcase",
                    views: {
                        "detail@showcases": {
                            templateUrl: function () {
                                return 'showcase/showcase-demo.html';
                            }
                        },
                        "demos@showcases": {
                            templateUrl: function () {
                                return 'showcase/showcase-demos.html';
                            }
                        }
                    }
                }).
                state('showcases.showcase.demo', {
                    url: "/:demo",
                    views: {
                        'demo@showcases.showcase': {
                            templateUrl: function (stateParams) {
                                return 'showcase/' + stateParams.showcase + '/' + stateParams.demo + '/' + stateParams.demo + '.html';
                            }
                        }
                    }
                })
            ;
        });
})();

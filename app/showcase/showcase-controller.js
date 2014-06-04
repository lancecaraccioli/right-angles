'use strict';
(function(){
    angular.module('showcase')
        .controller('showcase.ShowcaseController', [
            "$scope",
            "$state",
            "$stateParams",
            "showcase.showcaseService",
            "showcase.STATES",
            function ($scope, $state, $stateParams, showcaseService, showcaseStateNames, initialShowcase) {
                function redirectToDemo(){
                    $scope.selectedShowcase = showcaseService.getSelectedShowcase();

                    var demoState = {
                        showcase:$scope.selectedShowcase.name,
                        demo: $scope.selectedShowcase.selectedDemo.name
                    };

                    $state.go(showcaseStateNames.DEMO, demoState);
                }

                $scope.showcaseSelected = function (showcase) {
                    showcaseService.selectShowcase(showcase);

                    redirectToDemo();
                };

                $scope.demoSelected = function (demo) {
                    showcaseService.selectDemo(demo);

                    redirectToDemo();
                };

                var initialStatePromise = showcaseService.getStorageState();
                initialStatePromise.then(function(storedState){
                    $scope.showcases = storedState;
                    redirectToDemo();
                }, function(reason){
                    console.warn('Failed to retrieve Initial State from storage. Reason:%s', reason);
                    redirectToDemo();
                }, function(update){
                    //progress currently do nothing
                });

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

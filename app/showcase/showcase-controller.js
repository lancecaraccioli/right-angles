'use strict';
angular.module('RightAnglesShowcase').
    controller('rightAngles.ShowcaseController', [
        "$scope",
        "$state",
        "$stateParams",
        function ($scope, $state) {
            $scope
                .vendors = [
                    {
                        "name": "angular-ui-bootstrap",
                        "label": 'Angular UI Bootstrap Directives',
                        "demos": [
                            {
                                "name": "accordian",
                                "label": 'Accordian'
                            },
                            {
                                "name": "alert",
                                "label": 'Alert'
                            },
                            {
                                "name": "buttons",
                                "label": 'Buttons'
                            },
                            {
                                "name": "carousel",
                                "label": 'Carousel'
                            },
                            {
                                "name": "collapse",
                                "label": 'Collapse'
                            }
                        ]
                    },
                    {
                        "name": "angular-js",
                        "label": 'Angular JS (todo)',
                        demos: [
                            {
                                "name": "foo",
                                "label": 'Foo'
                            }
                        ]
                    }
                ];
            $scope.vendorSelected = function (vendor) {
                if (vendor.name !== null) {
                    $scope.vendor = vendor;
                    $state.go('showcase.vendor', {vendor: $scope.vendor.name});
                }
            };
            $scope.demoSelected = function (demo) {
                if (demo.name !== null) {
                    $scope.demo = demo;
                    $state.go('showcase.vendor.demo', {vendor:$scope.vendor.name, demo: $scope.demo.name});
                }
            };
        }
    ]).config(function ($stateProvider) {
        $stateProvider.
            state('showcase.vendor', {
                url: "/:vendor",
                views: {
                    "detail@showcase": {
                        templateUrl: function (stateParams) {
                            return 'showcase/' + stateParams.vendor + '/intro.html';
                        }
                    },
                    "demos@showcase": {
                        templateUrl: function (stateParams) {
                            return 'showcase/' + stateParams.vendor + '/demos.html';
                        }
                    }
                }
            }).
            state('showcase.vendor.demo', {
                url: "/:demo",
                views: {
                    'detail@showcase': {
                        templateUrl: function (stateParams) {
                            return 'showcase/' + stateParams.vendor + '/' + stateParams.demo + '/' + stateParams.demo + '.html';
                        }
                    }
                }
            })
        ;
    });


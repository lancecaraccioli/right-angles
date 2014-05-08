'use strict';

angular.module('AngularChromeAppShowcase').
    controller('ShowcaseController', [
        "$scope",
        "$state",
        "$stateParams",
        function ($scope, $state) {
            $scope.ui = {
                vendors:[
                    {
                        "name":"angular-ui-bootstrap",
                        "label":'Angular UI Bootstrap Directives',
                        "demos":[
                            {
                                "name":"accordian",
                                "label":'Accordian'
                            },
                            {
                                "name":"alert",
                                "label":'Alert'
                            },
                            {
                                "name":"buttons",
                                "label":'Buttons'
                            },
                            {
                                "name":"carousel",
                                "label":'Carousel'
                            },
                            {
                                "name":"collapse",
                                "label":'Collapse'
                            }
                        ]
                    },
                    {
                        "name":"angular-js",
                        "label":'Angular JS (todo)',
                        demos:[]
                    }

                ]
            };

            $scope.vendorSelected=function(vendor){
                $scope.vendor = vendor;
                $state.go('showcase.vendor', {vendor:$scope.vendor.name});
            };

            $scope.demoSelected=function(demo){
                $scope.demo = demo;
                $state.go('showcase.vendor.demo', {demo:$scope.demo.name});
            };
        }
    ]).config(function ($stateProvider) {
        $stateProvider.
            state('showcase', {
                url: "/showcase",
                templateUrl: 'partials/showcase.html'
            }).
            state('showcase.vendor', {
                url: "/:vendor",
                views:{
                    detail:{
                        templateUrl: function(stateParams){
                            return 'partials/showcase/'+stateParams.vendor+'/intro.html';
                        }
                    },
                    "demos":{
                        templateUrl: function(stateParams){
                            return 'partials/showcase/'+stateParams.vendor+'/demos.html';
                        }
                    }
                }
            }).
            state('showcase.vendor.demo',{
                url: "/:demo",
                views:{
                    'detail@showcase':{
                        templateUrl: function(stateParams){
                            return 'partials/showcase/'+stateParams.vendor+'/demos/'+stateParams.demo+'.html';
                        }
                    }
                }
            })
        ;
    });


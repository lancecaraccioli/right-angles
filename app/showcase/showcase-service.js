'use strict';
angular.module('showcase')
    .value('showcase.STATES', {
        'ROOT':'showcases',
        'SHOWCASE':'showcases.showcase',
        'DEMO':'showcases.showcase.demo'
    })
    .factory('showcase.showcaseService', ['$q',function($q){
        /**
         * @todo refactor into showcase and demo rich models once a Domain architecture is established
         * @type {{showcases: {angular-ui-bootstrap: {name: string, label: string, demos: {accordian: {name: string, label: string}, alert: {name: string, label: string}, buttons: {name: string, label: string}, carousel: {name: string, label: string}, collapse: {name: string, label: string}}}, angular-js: {name: string, label: string, demos: {foo: {name: string, label: string}, bar: {name: string, label: string}, baz: {name: string, label: string}}}}, selectedShowcase: null, selectShowcase: Function, getShowcases: Function, getShowcase: Function, getSelectedShowcase: Function, hasSelectedShowcase: Function, selectedDemo: null, selectDemo: Function, getDemos: Function, getDemo: Function, getSelectedDemo: Function, hasSelectedDemo: Function, hasDemo: Function}}
         */
        var showcaseService = {
            showcases : {
                "angular-ui-bootstrap": {
                    "name":  "angular-ui-bootstrap",
                    "label": 'Angular UI Bootstrap Directives',
                    "demos": {
                        "accordian": {
                            "name":  "accordian",
                            "label": 'Accordian'
                        },
                        "alert":     {
                            "name":  "alert",
                            "label": 'Alert'
                        },
                        "buttons":   {
                            "name":  "buttons",
                            "label": 'Buttons'
                        },
                        "carousel":  {
                            "name":  "carousel",
                            "label": 'Carousel'
                        },
                        "collapse":  {
                            "name":  "collapse",
                            "label": 'Collapse'
                        }
                    }
                },
                "angular-js":           {
                    "name":  "angular-js",
                    "label": 'Angular JS (todo)',
                    demos: {
                        "foo": {
                            "name":  "foo",
                            "label": 'Foo'
                        },
                        "bar": {
                            "name":  "bar",
                            "label": 'Bar'
                        },
                        "baz": {
                            "name":  "baz",
                            "label": 'Baz'
                        }
                    }
                }
            },
            selectedShowcase:null,
            selectShowcase:function(showcase){
                var selectedShowcase = showcaseService.getSelectedShowcase();
                selectedShowcase.active = false;
                var newlySelectedShowcase = showcaseService.getShowcase(showcase);
                if (!newlySelectedShowcase){
                    newlySelectedShowcase = selectedShowcase;
                }
                newlySelectedShowcase.active = true;
                showcaseService.selectedShowcase = newlySelectedShowcase;
                showcaseService.saveStorageState();
            },
            getShowcases:function(){
                return showcaseService.showcases;
            },
            getShowcase:function(showcase){
                var showcaseName;
                if (typeof showcase === 'string'){
                    showcaseName = showcase;
                } else if (typeof showcase === 'object') {
                    showcaseName = showcase.name;
                }
                if (showcaseName && showcaseService.showcases[showcaseName]){
                    return showcaseService.showcases[showcaseName];
                }
            },
            getSelectedShowcase:function(){
                if (!showcaseService.selectedShowcase){
                    var firstShowcaseKey = Object.keys(showcaseService.showcases)[0];
                    showcaseService.selectedShowcase = showcaseService.getShowcase(firstShowcaseKey);
                    showcaseService.selectedShowcase.active = true;
                }
                return showcaseService.selectedShowcase;
            },
            selectDemo:function(demo, showcase){
                showcase = showcaseService.getShowcase(showcase) || showcaseService.getSelectedShowcase();
                var selectedDemo = showcaseService.getSelectedDemo(showcase);
                selectedDemo.active = false;

                var newlySelectedDemo = showcaseService.getDemo(demo, showcase);
                if (!newlySelectedDemo){
                    newlySelectedDemo = selectedDemo;
                }

                newlySelectedDemo.active = true;

                showcase.selectedDemo = newlySelectedDemo;
                showcaseService.saveStorageState();

                return showcaseService;
            },
            getDemo:function(demo, showcase){
                showcase = showcaseService.getShowcase(showcase) || showcaseService.getSelectedShowcase();
                var demoName;
                if (typeof demo === 'object') {
                    demoName = demo.name;
                } else if (typeof demo === 'string') {
                    demoName = demo;
                }
                return showcase.demos[demoName];
            },
            getSelectedDemo:function(showcase){
                showcase = showcaseService.getShowcase(showcase) || showcaseService.getSelectedShowcase();
                if (!showcase.selectedDemo){
                    var firstDemoKey = Object.keys(showcase.demos)[0];
                    showcase.selectedDemo = showcaseService.getDemo(firstDemoKey, showcase.name);
                    showcase.selectedDemo.active = true;
                }

                return showcase.selectedDemo;
            },
            getState:function(){
                return {'showcaseState':showcaseService.getShowcases()};
            },
            saveStorageState:function(){
                chrome.storage.sync.set(showcaseService.getState());
            },
            stateInitialized:false,
            getStorageState:function(){
                var deferred = $q.defer();
                if (showcaseService.stateInitialized){
                    deferred.resolve(showcaseService.getSelectedTheme());
                } else {
                    //chrome.storage.sync.clear();//clear storage during debugging
                    chrome.storage.sync.get(showcaseService.getState() /*defaults*/, function (storedState) {
                        if (storedState['showcaseState']) {
                            angular.forEach(storedState['showcaseState'], function (showcase, showcaseName) {
                                if (showcase.active) {
                                    showcaseService.selectShowcase(showcase.name);
                                }
                                angular.forEach(showcase.demos, function (demo, demoName) {
                                    if (demo.active) {
                                        showcaseService.selectDemo(demo.name, showcase.name);
                                    }
                                });
                                //ensure a demo is selective for the showcase
                                showcaseService.getSelectedDemo(showcase.name);
                            });
                            //ensure a showcase is selected
                            showcaseService.getSelectedShowcase();
                            deferred.resolve(showcaseService.getState()['showcaseState']);
                        } else {
                            deferred.reject('An invalid initial state was retrieved');
                        }
                    });
                }
                return deferred.promise;
            }
        };

        return showcaseService;
    }]);

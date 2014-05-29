'use strict';
angular.module('AngularChromeAppShowcase').
    value("rightAngles.appInfo", angular.extend({
        theme: {"name": "slate"},
        brand: "rightAngles"
    }, chrome.runtime.getManifest()));


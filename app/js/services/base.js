'use strict';

angular.module('AngularChromeAppShowcase').
    value("appInfo", angular.extend({brand:"Angulared"},chrome.runtime.getManifest()));


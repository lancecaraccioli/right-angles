'use strict';

angular.module('AngularChromeAppShowcase').
    value("angulared.appInfo", angular.extend({theme:{"name":"slate"}, brand:"Angulared"},chrome.runtime.getManifest()));


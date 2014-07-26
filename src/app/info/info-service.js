(function () {
  'use strict';
  angular.module('RightAnglesShowcase')
    .value("rightAngles.appInfo", angular.extend({
      brand: "Right Angles"
    }, chrome.runtime.getManifest()));
})();

(function () {
  'use strict';
  var App = angular.module('RightAnglesShowcase', [
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'mgcrea.ngStrap',
    'theme',
    'showcase',
    'showcase.angularUiBootstrap',
    'rightAngles.navbar'
  ]);

  App.config(function( $compileProvider ) {
    //tell angular to allow 'chrome-extension' urls
    var currentImgSrcSanitizationWhitelist = $compileProvider.imgSrcSanitizationWhitelist();
    var newImgSrcSanitizationWhiteList = currentImgSrcSanitizationWhitelist.toString().slice(0,-1) +
      '|chrome-extension:' +
      currentImgSrcSanitizationWhitelist.toString().slice(-1);

    $compileProvider.imgSrcSanitizationWhitelist(newImgSrcSanitizationWhiteList);
  });

  App.directive('appNav', function () {
    return {
      replace: true,
      restrict: 'EAC',
      templateUrl: 'app-nav.html'
    };
  });

  App.directive('appMenu', function () {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'app-menu.html'
    };
  });
})();

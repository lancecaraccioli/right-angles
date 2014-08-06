(function () {
  'use strict';
  angular.module('showcase.angularUiBootstrap')
    .controller('showcase.angularUiBootstrap.ButtonsController', function ($scope) {
      $scope.singleModel = 1;

      $scope.radioModel = 'Middle';

      $scope.checkModel = {
        left: false,
        middle: true,
        right: false
      };
    });
})();

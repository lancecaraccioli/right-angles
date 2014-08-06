(function () {
  'use strict';
  angular.module('showcase.angularUiBootstrap')
    .controller('showcase.angularUiBootstrap.CarouselController', function ($scope) {
      $scope.myInterval = 4000;
      var slides = $scope.slides = [];
      $scope.addSlide = function() {
        var newWidth = 600 + slides.length,
          index = slides.length % 5;

        slides.push({
          image: '/app/showcase/angular-ui-bootstrap/carousel/img/' + (index + 1) + '.jpg',
          text: ['More','Extra','One More','Surplus','Another'][index] + ' ' +
          ['Lunch Plans', 'Tubular', 'Hit', 'Rhythm','Dubstep'][index],
          name: 'Slide ' + (index + 1)
        });
      };
      for (var i=0; i<5; i++) {
        $scope.addSlide();
      }
    });
})();

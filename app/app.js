'use strict';
angular.module('RightAnglesShowcase', [
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'rightAngles.theme',
    'rightAngles.showcase'
]).run(function($rootScope){
    /*$rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            console.log(toState);
            $rootScope.stateIsChanging = true;
        }
    );
    $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams){
            $rootScope.stateIsChanging = false;
        }
    );
    $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error){
            $rootScope.stateIsChanging = false;
        }
    );*/
});




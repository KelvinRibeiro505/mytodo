'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('mytodoApp', [
    'ui.router'
  ])
   .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .state('route1', {
        url: '/route1',
        templateUrl: 'views/route1.html'
      })
        .state('route1.list', {
          url: '/list',
          templateUrl: 'views/route1.list.html',
          controller: function($scope) {
            $scope.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
          }
        })

      .state('route2', {
        url: '/route2',
        templateUrl: 'views/route2.html'
      })
        .state('route2.list', {
          url: '/list',
          templateUrl: 'views/route2.list.html',
          controller: function($scope) {
             $scope.things = ['A', 'Set', 'Of', 'Things'];
          }
        }); 
}]);

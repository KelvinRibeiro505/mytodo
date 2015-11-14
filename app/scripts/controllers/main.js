'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  
  .controller('MainCtrl', function ($scope) {
    
    $scope.itens = [];

    $scope.addItem = function () {
	  $scope.itens.push($scope.item);
	  $scope.item = '';
	};

	$scope.removeItem = function (index) {
	  $scope.itens.splice(index, 1);
	};

  });

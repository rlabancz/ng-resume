'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('./data/resume.json').success(function (result) {
      $scope.resume = result;
    }).error(function() {
      $http.get('./data/sample.json').success(function (result) {
        $scope.resume = result;
      }).error(function() {
        console.log('error loading files');
      });
    });

    $scope.getFullYear = function (date) {
      if (date === '') {
        return "present";
      } else {
        return new Date(date).getFullYear();
      }
    };

    $scope.getFilledStars = function (value) {
      return new Array(value);
    };
    $scope.getUnfilledStars = function (value) {
      return new Array(5 - value);
    };
  }]);

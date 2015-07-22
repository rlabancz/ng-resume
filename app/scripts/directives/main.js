'use strict';

/**
 * @ngdoc function
 * @name resumeApp.directive:Main
 * @description
 * Directives of the resumeApp
 */
angular.module('resumeApp')
  .directive('headerSection', function () {
    return {
      restrict: 'AEC',
      templateUrl: 'views/header.html'
    };
  }).directive('detailSection', function () {
    return {
      restrict: 'AE',
      scope: {
        icon: '@',
        section: '=',
        getFullYear: '&'
      },
      templateUrl: 'views/detail.html',
      link: function (scope) {
        scope.getYear = function (date) {
          return scope.getFullYear()(date);
        };
      }
    };
  }).directive('referenceSection', function () {
    return {
      restrict: 'AEC',
      templateUrl: 'views/reference.html'
    };
  });

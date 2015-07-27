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
      restrict: 'AE',
      templateUrl: 'views/header.html',
      scope: {
        section: '='
      }
    };
  }).directive('headerMiniSection', function () {
    return {
      restrict: 'AE',
      templateUrl: 'views/header-mini.html',
      scope: {
        section: '='
      }
    };
  }).directive('workSection', function () {
    return {
      restrict: 'AE',
      scope: {
        icon: '@',
        section: '=',
        getFullYear: '&'
      },
      templateUrl: 'views/work.html',
      link: function (scope) {
        scope.getYear = function (date) {
          return scope.getFullYear()(date);
        };
      }
    };
  }).directive('publicationSection', function () {
    return {
      restrict: 'AE',
      scope: {
        icon: '@',
        section: '=',
        getFullYear: '&'
      },
      templateUrl: 'views/publication.html',
      link: function (scope) {
        scope.getYear = function (date) {
          return scope.getFullYear()(date);
        };
      }
    };
  }).directive('educationSection', function () {
    return {
      restrict: 'AE',
      scope: {
        icon: '@',
        section: '=',
        getFullYear: '&'
      },
      templateUrl: 'views/education.html',
      link: function (scope) {
        scope.getYear = function (date) {
          return scope.getFullYear()(date);
        };
      }
    };
  }).directive('awardsSection', function () {
    return {
      restrict: 'AE',
      scope: {
        icon: '@',
        section: '=',
        getFullYear: '&'
      },
      templateUrl: 'views/awards.html',
      link: function (scope) {
        scope.getYear = function (date) {
          return scope.getFullYear()(date);
        };
      }
    };
  }).directive('volunteerSection', function () {
    return {
      restrict: 'AE',
      scope: {
        icon: '@',
        section: '=',
        getFullYear: '&'
      },
      templateUrl: 'views/volunteer.html',
      link: function (scope) {
        scope.getYear = function (date) {
          return scope.getFullYear()(date);
        };
      }
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

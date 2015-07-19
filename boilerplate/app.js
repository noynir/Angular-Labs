(function (angular) {
  'use strict';

  angular.module('SampleApp', [])
    .config(function() {

    })
    .controller('MyController', MyController);

  MyController.$inject = ['$scope'];
  function MyController($scope) {

  }
})(window.angular);

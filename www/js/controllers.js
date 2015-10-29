/* global angular, document, window */
angular.module('starter.controllers', [])
  .controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,  $location) {
      // Form data for the login modal
      $scope.loginData = {};
  })

  .controller('MapCtrl', function($scope, $timeout) {

    $timeout(function () {
        document.getElementById('fab-communicate').classList.toggle('on');
        document.getElementById('fab-center').classList.toggle('on');
    }, 900);

    $scope.centerMap = function() {
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }, function (error) {
          console.log('Unable to get location: ' + error.message);
        });
    };

    $scope.mapCreated = function(map) {
      $scope.map = map;
      $scope.centerMap();
    };
  })

  .controller('ConfigCtrl', function($scope) {
    $scope.preferences = {
      receiveNotifications: true
    };
  })
;

'use strict';
var Slider = require('bootstrap-slider');

module.exports = function(ngModule) {

    ngModule.controller('glPreviewController', function($scope, glOptionService) {

        var update = function(filter, val) {
            $scope[filter] = val;
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        };

        var initialize = function() {
            console.log('glPreviewController initializing...');

            $scope.options = glOptionService;
            $scope.brightness = 1;
            $scope.contrast = 1;

            new Slider('.slider-brightness').on('slide', function(val) {
                update('brightness', val);
            });
            new Slider('.slider-contrast').on('slide', function(val) {
                update('contrast', val);
            });

            $scope.$watch('contrast', function() {
                $scope.filter = `-webkit-filter: contrast(${$scope.contrast}) brightness(${$scope.brightness});`;
            });
            $scope.$watch('brightness', function() {
                $scope.filter = `-webkit-filter: contrast(${$scope.contrast}) brightness(${$scope.brightness});`;
            });
        };

        initialize();
    });
};

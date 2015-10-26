'use strict';

var Slider = require('bootstrap-slider');

module.exports = function(ngModule) {

    ngModule.controller('glToolbarController', function($scope, glEffectService) {

        $scope.brightness = 1;
        $scope.contrast = 1;

        $scope.closeImage = function() {
            $scope.$parent.closeImage();
            resetValues();
        };

        var resetValues = function() {
            $scope.brightness = 1;
            $scope.contrast = 1;
            $scope.sliderBrightness.setValue(1);
            $scope.sliderContrast.setValue(1);
            glEffectService.updateFilters($scope.brightness, $scope.contrast);
        };

        var updateValues = function() {
            glEffectService.updateFilters($scope.brightness, $scope.contrast);
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        };

        var initialize = function() {

            $scope.sliderBrightness = new Slider('#slider-brightness', {
                min: 0,
                max: 5,
                step: 0.05,
                value: 1
            }).on('slide', function(val) {
                $scope.brightness = val;
                updateValues();
            });

            $scope.sliderContrast = new Slider('#slider-contrast', {
                min: 0,
                max: 5,
                step: 0.05,
                value: 1
            }).on('slide', function(val) {
                $scope.contrast = val;
                updateValues();
            });
            resetValues();
        };
        initialize();

    });
};

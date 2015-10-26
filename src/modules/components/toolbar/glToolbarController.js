'use strict';

var Slider = require('bootstrap-slider');

module.exports = function(ngModule) {

    ngModule.controller('glToolbarController', function($scope, glEffectService) {

        $scope.brightness = 1;
        $scope.contrast = 1;

        var updateValues = function() {
            glEffectService.updateFilters($scope.brightness, $scope.contrast);
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        };

        var initialize = function() {

            new Slider('#slider-brightness', {
                min: 0,
                max: 5,
                step: 0.05,
                value: 1
            }).on('slide', function(val) {
                $scope.brightness = val;
                updateValues();
            });

            new Slider('#slider-contrast', {
                min: 0,
                max: 5,
                step: 0.05,
                value: 1
            }).on('slide', function(val) {
                $scope.contrast = val;
                updateValues();
            });
        };
        initialize();

    });
};

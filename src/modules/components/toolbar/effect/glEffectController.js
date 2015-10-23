'use strict';

var Slider = require('bootstrap-slider');

module.exports = function(ngModule) {

    ngModule.controller('glEffectController', function($element, $scope, glEffectService) {

        $scope.isVisible = false;
        $scope.effect = null;

        $scope.toggleVisibility = function() {
            $scope.isVisible = !$scope.isVisible;
        };

        var generateId = function() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
        };

        $scope.selectEffect = function() {
            var effect = glEffectService.getEffect($scope.selectedEffect);
            effect.id = generateId();
            $scope.effect = effect;

            new Slider('.slider', {
                id: effect.id + '-slider',
                min: effect.min,
                max: effect.max,
                step: effect.step,
                value: effect.initialValue
            }).on('slide', function(val) {
                //update('contrast', val);
                console.log('Updating value to: ' + val);
            });

        };

        var initialize = function() {
            $scope.effectService = glEffectService;
        };
        initialize();

    });
};

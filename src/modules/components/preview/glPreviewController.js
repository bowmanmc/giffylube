'use strict';

module.exports = function(ngModule) {

    ngModule.controller('glPreviewController', function($scope, glOptionService) {

        var initialize = function() {
            console.log('glPreviewController initializing...');

            $scope.options = glOptionService;
            $scope.brightness = 1.0;
            $scope.contrast = 1.0;

            $scope.opts = [
                0.10, 0.25, 0.50, 0.75,
                1.0, 1.5, 2.0, 3.0, 5.0,
                10.0, 20.0, 50.0
            ];

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

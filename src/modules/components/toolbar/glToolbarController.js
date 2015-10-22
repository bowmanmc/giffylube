'use strict';

module.exports = function(ngModule) {

    ngModule.controller('glToolbarController', function($scope) {

        $scope.layerUiVisible = false;

        $scope.availableEffects = [{
            'id': 'brightness',
            'name': 'Brightness'
        }, {
            'id': 'blur',
            'name': 'Blur'
        }, {
            'id': 'contrast',
            'name': 'Contrast'
        }, {
            'id': 'grayscale',
            'name': 'Grayscale'
        }, {
            'id': 'hue',
            'name': 'Hue'
        }, {
            'id': 'invert',
            'name': 'Invert'
        }, {
            'id': 'saturate',
            'name': 'Saturate'
        }, {
            'id': 'sepia',
            'name': 'Sepia'
        }];

        $scope.toggleLayerUiVisibility = function() {
            $scope.layerUiVisible = !$scope.layerUiVisible;
        };

        var initialize = function() {
            console.log('glToolbarController initializing...');
        };
        initialize();

    });
};

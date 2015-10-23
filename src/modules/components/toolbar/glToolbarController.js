'use strict';

module.exports = function(ngModule) {

    ngModule.controller('glToolbarController', function($scope) {

        $scope.layerUiVisible = true;

        $scope.toggleLayerUiVisibility = function() {
            $scope.layerUiVisible = !$scope.layerUiVisible;
        };

        var initialize = function() {
            console.log('glToolbarController initializing...');
        };
        initialize();

    });
};

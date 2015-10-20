'use strict';

module.exports = function(ngModule) {

    ngModule.controller('glPreviewController', function($scope, glOptionService) {

        var initialize = function() {
            console.log('glPreviewController initializing...');

            $scope.options = glOptionService;
            $scope.brightness = 10;
            $scope.contrast = 10;
        };

        initialize();
    });
};

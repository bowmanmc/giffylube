'use strict';

module.exports = function(ngModule) {

    ngModule.controller('glCanvasController', function($scope) {

        $scope.image = null;
        $scope.imageInfo = null;

        var initialize = function() {
            console.log('glCanvasController initializing...');
        };
        initialize();
    });
};

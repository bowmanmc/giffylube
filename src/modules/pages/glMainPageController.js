'use strict';

module.exports = function(ngModule) {

    ngModule.controller('glMainPageController', function($scope) {

        $scope.image = null;
        $scope.imageInfo = null;

        var initialize = function() {
            console.log('glMainPageController initializing...');
        };
        initialize();
    });
};

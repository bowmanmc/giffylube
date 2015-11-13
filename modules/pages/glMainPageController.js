'use strict';

module.exports = function(ngModule) {

    ngModule.controller('glMainPageController', function($scope, glEffectService) {

        $scope.image = null;
        $scope.imageInfo = null;

        $scope.closeImage = function() {
            $scope.image = null;
            $scope.imageInfo = null;
        };

        var initialize = function() {
            console.log('glMainPageController initializing...');
            $scope.effects = glEffectService;
        };
        initialize();
    });
};

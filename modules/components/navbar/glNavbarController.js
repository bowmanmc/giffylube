'use strict';

module.exports = function(ngModule) {

    ngModule.controller('glNavbarController', function($scope, glOptionService) {

        $scope.updateImage = function(img) {
            console.log('Updating image to: ' + img);
            glOptionService.selected.image = img;
        };

        var initialize = function() {
            console.log('glNavbarController initializing...');

            $scope.options = glOptionService;
        };

        initialize();
    });
};

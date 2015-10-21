'use strict';

module.exports = function(ngModule) {

    ngModule.controller('glFileDropController', function($element, $scope) {

        var processDragEvent = function(event, isOver) {
            if (event !== null) {
                event.preventDefault();
            }
            $scope.isOver = isOver;
            if(!$scope.$$phase) {
                $scope.$apply();
            }
            return false;
        };
        var handleDragOver = function(event) {
            return processDragEvent(event, true);
        };
        var handleDragLeave = function(event) {
            return processDragEvent(event, false);
        };

        var initialize = function() {
            $scope.isOver = false;
            console.log('glFileDropController initializing...');
            $element.bind('dragover', handleDragOver);
            $element.bind('dragleave', handleDragLeave);
        };

        initialize();
    });
};

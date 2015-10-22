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

        var handleDrop = function(event) {
            if (event !== null) {
                event.preventDefault();
            }

            var reader = new FileReader();
            reader.onload = function(evt) {
                $scope.file = evt.target.result;
                if(!$scope.$$phase) {
                    $scope.$apply();
                }
            };
            var file = event.dataTransfer.files[0];
            reader.readAsDataURL(file);
            $scope.info = {
                'name': file.name,
                'type': file.type,
                'size': file.size
            };
            console.log('Image info: ' + JSON.stringify($scope.info));

            if(!$scope.$$phase) {
                $scope.$apply();
            }
            return false;
        };

        var initialize = function() {
            $scope.isOver = false;
            console.log('glFileDropController initializing...');
            $element.bind('dragover', handleDragOver);
            $element.bind('dragleave', handleDragLeave);
            $element.bind('drop', handleDrop);
        };

        initialize();
    });
};

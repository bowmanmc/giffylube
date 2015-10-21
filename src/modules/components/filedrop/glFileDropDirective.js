'use strict';

module.exports = function(ngModule) {

    ngModule.directive('glFileDrop', function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/components/filedrop/glFileDropTemplate.html',
            controller: 'glFileDropController'
        };
    });
};

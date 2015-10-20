'use strict';

module.exports = function(ngModule) {

    ngModule.directive('glPreview', function() {
        return {
            restrict: 'EA',
            templateUrl: 'modules/components/preview/glPreviewTemplate.html',
            controller: 'glPreviewController'
        };
    });
};

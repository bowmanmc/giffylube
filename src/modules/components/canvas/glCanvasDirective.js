'use strict';

module.exports = function(ngModule) {

    ngModule.directive('glCanvas', function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/components/canvas/glCanvasTemplate.html',
            controller: 'glCanvasController'
        };
    });
};

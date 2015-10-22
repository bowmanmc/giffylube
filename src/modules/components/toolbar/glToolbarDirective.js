'use strict';

module.exports = function(ngModule) {

    ngModule.directive('glToolbar', function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/components/toolbar/glToolbarTemplate.html',
            controller: 'glToolbarController',
            scope: {
                file: '=',
                info: '='
            }
        };
    });
};

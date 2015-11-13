'use strict';

module.exports = function(ngModule) {

    ngModule.directive('glEffect', function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/components/toolbar/effect/glEffectTemplate.html',
            controller: 'glEffectController',
            replace: true,
            scope: {}
        };
    });
};

'use strict';

module.exports = function(ngModule) {

    ngModule.directive('glNavbar', function() {
        return {
            restrict: 'EA',
            templateUrl: 'modules/components/navbar/glNavbarTemplate.html',
            controller: 'glNavbarController'
        };
    });
};

'use strict';

module.exports = function(ngModule) {

    ngModule.controller('glCanvasController', function($scope) {

        var initialize = function() {
            console.log('glCanvasController initializing...');
        };
        initialize();
    });
};

'use strict';

module.exports = function(ngModule) {

    ngModule.controller('glMainPageController', function() {
        var initialize = function() {
            console.log('glMainPageController initializing...');
        };
        initialize();
    });
};

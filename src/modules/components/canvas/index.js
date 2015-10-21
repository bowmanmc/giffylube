'use strict';

module.exports = function(ngModule) {
    require('./glCanvasController')(ngModule);
    require('./glCanvasDirective')(ngModule);
};

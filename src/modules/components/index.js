'use strict';

module.exports = function(ngModule) {
    require('./canvas')(ngModule);
    require('./filedrop')(ngModule);
    require('./navbar')(ngModule);
    //require('./preview')(ngModule);
};

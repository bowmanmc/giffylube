'use strict';

module.exports = function(ngModule) {
    require('./filedrop')(ngModule);
    require('./navbar')(ngModule);
    require('./toolbar')(ngModule);
    //require('./preview')(ngModule);
};

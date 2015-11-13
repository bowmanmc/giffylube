'use strict';

module.exports = function(ngModule) {

    ngModule.config(function($routeProvider) {
        $routeProvider
        .when('/', {
             controller: 'glMainPageController',
            templateUrl: 'modules/pages/glMainPageTemplate.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    });

};

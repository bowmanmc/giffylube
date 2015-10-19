'use strict';

// Angular
import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';
import ngSanitize from 'angular-sanitize';

// Application
var app = angular.module('gl', [
    ngCookies,
    ngResource,
    ngRoute,
    ngSanitize
]);

require('./pages')(app);
require('./routing')(app);

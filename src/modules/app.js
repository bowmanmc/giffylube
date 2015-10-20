'use strict';

// Global Dependencies
require('jquery');      // used by bootstrap
require('bootstrap');   // used by the navbar

// Angular
import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';
import ngSanitize from 'angular-sanitize';

import rzModule from 'angularjs-slider';

// Application
var app = angular.module('gl', [
    ngCookies,
    ngResource,
    ngRoute,
    ngSanitize,
    'rzModule'
]);

// Load Application Components
require('./components')(app);
require('./pages')(app);
require('./services')(app);
require('./routing')(app);

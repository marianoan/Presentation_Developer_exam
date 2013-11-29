/*
* @Author: Mariano Gonzalez
*/
require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        jqueryui: {
            exports: "$",
            deps: ['jquery']
        },
        foundation: {
            exports: "$",
            deps: ['jquery']
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    baseUrl: 'js',
    paths: {
        jquery: 'jquery',
        jqueryui: 'jquery-ui-1.10.3.custom.min',
        require: 'require',
        modernizr: 'modernizr',
        foundation: 'foundation.min',
        underscore: 'underscore-min',
        backbone: 'backbone-min',
        localStorage: 'backbone.localStorage'
    }

});



require([
    'router',
], function (Router) {
    
    new Router();
});





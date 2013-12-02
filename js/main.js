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
            deps: ["jquery"]
        },
        "foundation.abide": {
            deps: ["foundation"]
        },
        "foundation.accordion": {
            deps: ["foundation"]
        },
        "foundation.alert": {
            deps: ["foundation"]
        },
        "foundation.clearing": {
            deps: ["foundation"]
        },
        "foundation.dropdown": {
            deps: ["foundation"]
        },
        "foundation.interchange": {
            deps: ["foundation"]
        },
        "foundation.joyride": {
            deps: ["foundation"]
        },
        "foundation.magellan": {
            deps: ["foundation"]
        },
        "foundation.offcanvas": {
            deps: ["foundation"]
        },
        "foundation.orbit": {
            deps: ["foundation"]
        },
        "foundation.reveal": {
            deps: ["foundation"]
        },
        "foundation.tab": {
            deps: ["foundation"]
        },
        "foundation.tooltip": {
            deps: ["foundation"]
        },
        "foundation.topbar": {
            deps: ["foundation"]
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    baseUrl: 'js',
    paths: {
        jquery: 'jquery',
        foundation: "foundation/foundation",
        "foundation.abide": "foundation/foundation.abide",
        "foundation.accordion": "foundation/foundation.accordion",
        "foundation.alert": "foundation/foundation.alert",
        "foundation.clearing": "foundation/foundation.clearing",
        "foundation.dropdown": "foundation/foundation.dropdown",
        "foundation.interchange": "foundation/foundation.interchange",
        "foundation.joyride": "foundation/foundation.joyride",
        "foundation.magellan": "foundation/foundation.magellan",
        "foundation.offcanvas": "foundation/foundation.offcanvas",
        "foundation.orbit": "foundation/foundation.orbit",
        "foundation.reveal": "foundation/foundation.reveal",
        "foundation.tab": "foundation/foundation.tab",
        "foundation.tooltip": "foundation/foundation.tooltip",
        "foundation.topbar": "foundation/foundation.topbar",
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
    'jquery',
    'router',
    "foundation.abide",
    "foundation.accordion",
    "foundation.alert",
    "foundation.clearing",
    "foundation.dropdown",
    "foundation.interchange",
    "foundation.joyride",
    "foundation.magellan",
    "foundation.offcanvas",
    "foundation.orbit",
    "foundation.reveal",
    "foundation.tab",
    "foundation.tooltip",
    "foundation.topbar",
    "modernizr"
], function ($, Router) {
    $(document).foundation();
    new Router();
});





/**
 * Created by Administrator on 10/20/13.
 */
require.config({
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    paths: {
        handlebars: '/js/handlebars/handlebars-1.0.rc.1-MODIFIED',
        jquery: '/js/jquery/jquery-1.8.2',
        underscore: '/js/underscore/underscore-min',
        backbone: '/js/backbone/backbone.dev',
        text: '/js/require/plugins/text'
    }
});

require([
    'app'
], function (App) {
    App.initialize();
});


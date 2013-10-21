define([
    'jquery',
    'underscore',
    'handlebars',
    'backbone',
    'router'
], function ($, _, Handlebars, Backbone, Router) {
    var initialize = function () {
        //start router
        Router.initialize();
    }

    return {
        initialize: initialize
    };
});
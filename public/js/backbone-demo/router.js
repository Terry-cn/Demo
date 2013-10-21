define([
    'jquery',
    'underscore',
    'handlebars',
    'backbone'
], function ($, _, Handlebars, Backbone) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'defaultPage'
        },
        defaultPage: function () {
            require(['view-test'], function (view) {
                view.render();
            });
        }
    });

    var initialize = function () {
        var app_router = new AppRouter;
        Backbone.history.start();
        return app_router;
    };

    return {
        initialize: initialize
    };
})
;


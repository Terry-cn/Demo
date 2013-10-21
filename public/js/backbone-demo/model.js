/**
 * Created by Administrator on 10/20/13.
 */
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var userModel = Backbone.Model.extend({
        defaults: {},
        urlRoot: "api/userinfo/",
        initialize: function () {
        }
    });

    return userModel;
});

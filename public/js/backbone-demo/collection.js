/**
 * Created by Administrator on 10/20/13.
 */
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var usercoll = Backbone.Model.extend({
        url:'/api/getusers'
    });
    return usercoll;
});

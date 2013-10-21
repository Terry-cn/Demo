/**
 * Created by Administrator on 10/20/13.
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'model',
    'collection',
    'text!templates/model-test.html'
], function ($, _, Backbone, Handlebars, model, collection, templateTest) {
    var view = Backbone.View.extend({
        el: '#content',
        events: {
            'click button#btnModelSave': 'modelSaveClick',
            'click button#btnModelFetch': 'modelFetchClick',
            'click button#btnModelUpdate': 'modelUpdateClick',
            'click button#btnModelDelete': 'modelDeleteClick',
            'click button#btnCollection': 'collectionClick'
        },
        render: function () {
            var template = Handlebars.compile(templateTest);
            this.$el.html(template());
        },
        modelSaveClick: function (e) {
            _model = new model();
            _model.username = 'Alexa';
            _model.save(null, {
                success: function (model) {
                    //成功
                }, error: function (model, response) {
                    //失败
                }
            })
        },
        modelFetchClick: function (e) {
            _model = new model();
            _model.id ='5264a45155be297815000001';
            _model.fetch({
                success: function (model) {
                    //成功
                }, error: function (model, response) {
                    //失败
                }
            })
        },
        modelUpdateClick: function (e) {
            _model = new model();
            _model.id ='5264a45155be297815000001';
            _model.set('lastlogin_at',new Date());
            _model.save({
                success: function (model) {
                    //成功
                }, error: function (model, response) {
                    //失败
                }
            })
        },
        modelDeleteClick: function (e) {
            _model = new model();
            _model.id = 1;
            _model.destroy({
                success: function (model) {
                    //成功
                }, error: function (model, response) {
                    //失败
                }
            })
        },
        collectionClick: function (e) {

        }
    });
    return new view;
});
define([
    'app',
    'backbone',
    'marionette',
    'modules/common/views/error/notFound'
], function (app, Backbone, Marionnete, NotFoundView) {
    return Backbone.Marionette.Controller.extend({
        notFound: function() {
            app.contentRegion.show(new NotFoundView());
        }
    });
});
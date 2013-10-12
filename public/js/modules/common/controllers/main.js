define([
    'app',
    'backbone',
    'marionette',
    'modules/common/views/layouts/main',
    'modules/posts/collections/posts',
    'modules/posts/views/posts/list'
], function (app, Backbone, Marionnete, mainLayout, Posts, ListView) {
    return Backbone.Marionette.Controller.extend({
        index: function() {
            var posts = new Posts();

            app.contentRegion.show(mainLayout);

            posts.fetch({data: {limit: 3}}).done(function() {
                mainLayout.postsRegion.show(new ListView({collection: posts}));
            });
        }
    });
});
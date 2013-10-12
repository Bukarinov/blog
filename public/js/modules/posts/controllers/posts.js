define([
    'app',
    'backbone',
    'marionette',
    'modules/posts/collections/posts',
    'modules/posts/models/post',
    'modules/posts/views/layouts/show',
    'modules/comments/views/layouts/list',
    'modules/posts/views/posts/list',
    'modules/posts/views/posts/show',
    'modules/posts/views/posts/edit'
], function (app, Backbone, Marionette, Posts, Post, showLayout, commentsLayout, ListView, ShowView, EditView) {
    return Backbone.Marionette.Controller.extend({
        list: function() {
            var posts = new Posts();

            posts.fetch().done(function() {
                // @TODO Add a parameter to remove administrative buttons
                app.contentRegion.show(new ListView({collection: posts}));
            });
        },
        show: function(id) {
            var post = new Post({id: id});

            app.contentRegion.show(showLayout);

            post.fetch().done(function() {
                showLayout.postRegion.show(new ShowView({model: post}));
                commentsLayout.model = post;
                commentsLayout.collection = post.get('comments');
                showLayout.commentsRegion.show(commentsLayout);
            });
        },
        new: function() {
            app.contentRegion.show(new EditView());
        },
        edit: function(id) {
            var post = new Post({id: id});

            post.fetch().done(function() {
                app.contentRegion.show(new EditView({model: post}));
            });
        }
    });
});
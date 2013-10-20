define([
    'app',
    'backbone',
    'marionette',
    'modules/posts/collections/posts',
    'modules/posts/models/post',
    'modules/posts/views/layoutShow',
    'modules/comments/views/layoutList',
    'modules/posts/views/posts/list',
    'modules/posts/views/posts/show',
    'modules/posts/views/posts/edit'
], function (app, Backbone, Marionette, Posts, Post, ShowLayout, CommentsLayout, ListView, ShowView, EditView) {
    return Backbone.Marionette.Controller.extend({
        list: function() {
            var posts = new Posts();

            posts.fetch().done(function() {
                // @TODO Add a parameter to remove administrative buttons
                app.contentRegion.show(new ListView({collection: posts}));
            });
        },
        show: function(id) {
            var post = new Post({id: id}),
                showLayout = new ShowLayout();

            app.contentRegion.show(showLayout);

            post.fetch().done(function() {
                showLayout.postRegion.show(new ShowView({model: post}));
                showLayout.commentsRegion.show(new CommentsLayout({model: post,  collection: post.get('comments')}));
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
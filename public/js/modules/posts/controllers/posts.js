define([
    'app',
    'backbone',
    'marionette',
    'modules/posts/collections/posts',
    'modules/posts/models/post',
    'modules/posts/layouts/show',
    'modules/comments/layouts/list',
    'modules/posts/views/list',
    'modules/posts/views/show',
    'modules/posts/views/edit'],
function (app, Backbone, Marionette, Posts, Post, showLayout, commentsLayout, ListView, ShowView, EditView) {
    return Backbone.Marionette.Controller.extend({
        listAction: function() {
            var posts = new Posts();

            posts.fetch().done(function() {
                app.contentRegion.show(new ListView({collection: posts}));
            });
        },
        showAction: function(id) {
            var post = new Post({id: id});

            post.fetch().done(function() {
                app.contentRegion.show(showLayout);
                showLayout.postRegion.show(new ShowView({model: post}));

                commentsLayout.model = post;
                commentsLayout.collection = post.get('comments');
                showLayout.commentsRegion.show(commentsLayout);
            });
        },
        newAction: function() {
            app.contentRegion.show(new EditView());
        },
        editAction: function(id) {
            var post = new Post({id: id});

            post.fetch().done(function() {
                app.contentRegion.show(new EditView({model: post}));
            });
        }
    });
});
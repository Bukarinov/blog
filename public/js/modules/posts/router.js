define([
    'backbone',
    'modules/common/layouts/main',
    'modules/posts/models/posts',
    'modules/posts/models/post',
    'modules/posts/views/list',
    'modules/posts/views/show',
    'modules/posts/views/edit'
], function(Backbone, layout, Posts, Post, ListView, ShowView, EditView) {
    return new (Backbone.Router.extend({
        routes: {
            "": "listAction",
            "post/new": "newAction",
            "post/:id": "showAction",
            "post/:id/edit": "editAction"
        },

        listAction: function() {
            var posts = new Posts();

            posts.fetch().done(function() {
                layout.contentRegion.show(new ListView({collection: posts}));
            });
        },
        showAction: function(id) {
            var post = new Post({id: id});

            post.fetch().done(function() {
                layout.contentRegion.show(new ShowView({model: post}));
            });
        },
        newAction: function() {
            layout.contentRegion.show(new EditView());
        },
        editAction: function(id) {
            var post = new Post({id: id});

            post.fetch().done(function() {
                layout.contentRegion.show(new EditView({model: post}));
            });
        }
    }));
});
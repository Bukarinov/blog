define(['backbone', 'underscore', 'modules/posts/models/posts', 'modules/posts/views/posts', 'modules/posts/models/post', 'modules/posts/views/post'],
function(Backbone, _, Posts, PostsView, Post, PostView) {
    return new (Backbone.Router.extend({
        routes: {
            "": "postsAction",
            ":id": "postAction",
            ":id/delete": "deleteAction"
        },
        initialize: function() {

        },

        postsAction: function() {
            this.posts = new Posts();
            this.postsView = new PostsView({collection: this.posts});

            var posts = this.posts;

            this.posts.fetch().done(function() {
                posts.trigger('fetched');
            });
        },
        postAction: function(id) {
            this.post = new Post({id: id});
            this.postView = new PostView({model: this.post});

            var post = this.post;

            this.post.fetch().done(function() {
                post.trigger('fetched');
            });

        },
        deleteAction: function(id) {
            this.post = new Post({id: id});

            var router = this;

            this.post.destroy({
                wait: true,
                success: function() {
                    router.navigate('/', {trigger: true});
                }
            });
        }
    }));
});
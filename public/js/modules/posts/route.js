define(['backbone', 'modules/posts/models/posts', 'modules/posts/views/posts', 'modules/posts/models/post', 'modules/posts/views/post'],
function(Backbone, Posts, PostsView, Post, PostView) {
    return new (Backbone.Router.extend({
        routes: {
            "": "postsAction",
            "post/:id": "postAction"
        },
        initialize: function() {
            this.posts = new Posts();
            this.postsView = new PostsView({collection: this.posts, el: document.body});

            this.post = new Post();
            this.postView = new PostView({model: this.post, el: document.body});

            //$('body').append(this.postsView.el);
        },

        postsAction: function() {
            this.posts.fetch();
            this.postsView.render();
        },
        postAction: function(id) {
            var post = this.posts.localStorage.find({id: id});

            this.post.set('title', post.title);
            this.post.set('description', post.description);

            this.postView.render();
        }
    }));
});
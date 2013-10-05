define(['backbone', 'modules/common/layouts/main', 'modules/posts/models/posts', 'modules/posts/views/list', 'modules/posts/models/post', 'modules/posts/views/show'],
function(Backbone, layout, Posts, ListView, Post, ShowView) {
    return new (Backbone.Router.extend({
        routes: {
            "": "listAction",
            "post/:id": "showAction"
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

        }
    }));
});
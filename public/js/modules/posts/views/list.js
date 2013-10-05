define(['backbone', 'marionette', 'modules/posts/models/post', 'modules/posts/views/post', 'hbs!modules/posts/templates/empty'],
function(Backbone, Marionette, Post, PostView, EmptyTpl) {
    return Backbone.Marionette.CollectionView.extend({
        tagName: 'ul',
        itemView: PostView,

        events: {
            'click .delete': 'deletePost'
        },

        emptyView: function() {
            return Backbone.Marionette.ItemView.extend({
                template: EmptyTpl
            });
        },

        deletePost: function(e) {
            e.preventDefault();

            this.collection.get($(e.currentTarget).data('id')).destroy();
        }
    });
});

define(['backbone', 'marionette', 'modules/posts/models/post', 'modules/posts/views/post'],
function(Backbone, Marionette, Post, PostView) {
    return Backbone.Marionette.CollectionView.extend({
        tagName: 'ul',
        itemView: PostView,
        events: {
            'click a': '_onClickLink',
            'click .delete': '_onClickDeletePost'
        },

        _onClickLink: function(e) {
            e.preventDefault();

            Backbone.history.navigate($(e.currentTarget).attr('href'), {trigger: true});
        },

        _onClickDeletePost: function(e) {
            e.preventDefault();

            this.collection.get($(e.currentTarget).data('id')).destroy();
        }
    });
});

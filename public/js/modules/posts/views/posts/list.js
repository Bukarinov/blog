define(['backbone', 'marionette', 'modules/posts/models/post', 'modules/posts/views/posts/list/post'],
function(Backbone, Marionette, Post, PostView) {
    return Backbone.Marionette.CollectionView.extend({
        tagName: 'ul',
        itemView: PostView,
        events: {
            'click a': '_onClickLink',
            'click .delete': '_onClickDeletePost'
        },
        initialize : function () {
            this.listenTo(this.collection, 'beforeFetch', this._onBeforeFetch);
            this.listenTo(this.collection, 'afterFetch', this._onAfterFetch);
            this.listenTo(this.collection, 'errorFetch', this._onErrorFetch);
        },

        _onBeforeFetch: function() {
            this.$el.addClass('loading');
        },
        _onAfterFetch: function() {
            this.$el.removeClass('loading');
        },
        _onErrorFetch: function() {
            // @TODO Trigger global error "Something goes wrong!"
        },

        _onClickLink: function(e) {
            e.preventDefault();

            Backbone.history.navigate(this.$(e.currentTarget).attr('href'), {trigger: true});
        },

        _onClickDeletePost: function(e) {
            e.preventDefault();

            this.collection.get(this.$(e.currentTarget).data('id')).destroy();
        }
    });
});

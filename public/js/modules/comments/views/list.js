define(['backbone', 'marionette', 'modules/comments/views/comment'],
function(Backbone, Marionette, CommentView) {
    return Backbone.Marionette.CollectionView.extend({
        itemView: CommentView
    });
});

define(['backbone', 'marionette', 'modules/comments/views/comments/list/comment'],
function(Backbone, Marionette, CommentView) {
    return Backbone.Marionette.CollectionView.extend({
        itemView: CommentView
    });
});
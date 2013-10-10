define(['backbone', 'marionette', 'modules/comments/models/comment', 'hbs!modules/comments/templates/edit', 'jquery-serialize-object'],
function(Backbone, Marionette, Comment, CommentTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: CommentTpl,
        events: {
            'submit form': '_submitCommentCallback'
        },

        _submitCommentCallback: function(e) {
            e.preventDefault();

            var comment = new Comment($(e.currentTarget).serializeObject());
            comment.set('postId', this.model.get('id'));

            if (!comment.isValid()) {
                // @TODO Doesn't work
            } else {
                // @TODO Add model to comments' collection and re-render view with comments
                // @TODO Check {wait: true}
                var that = this;

                comment.save(null, {wait: true}).done(function() {
                    // @TODO Add comment to comments' collection and re-render view
                    Backbone.history.navigate('/', {trigger: true});
                });
            }
        }
    });
});
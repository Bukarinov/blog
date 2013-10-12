define(['backbone', 'marionette', 'modules/comments/models/comment', 'hbs!modules/comments/templates/comments/edit', 'jquery-serialize-object'],
function(Backbone, Marionette, Comment, CommentTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: CommentTpl,
        events: {
            'submit form': '_onSubmitComment'
        },

        _onSubmitComment: function(e) {
            e.preventDefault();

            var comment = new Comment($(e.currentTarget).serializeObject());
            comment.set('postId', this.model.get('id'));

            var res = comment.save(null, {
                wait: true,
                success: function() {
                    // @TODO Add comment to comments' collection and re-render view
                    Backbone.history.navigate('/', {trigger: true});
                }
            });

            if (res === false) {
                console.log(comment.validationError);
            }
        }
    });
});
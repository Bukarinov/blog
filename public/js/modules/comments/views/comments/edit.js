define(['backbone', 'marionette', 'modules/comments/models/comment', 'hbs!modules/comments/templates/comments/edit', 'jquery-serialize-object'],
function(Backbone, Marionette, Comment, CommentTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: CommentTpl,
        ui: {
            text: '#text'
        },
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
                var that = this;

                this.$el.find('.error').removeClass('error');
                this.$el.find('.error-message').text('');

                _.each(comment.validationError, function(val, key) {
                    that.ui[key].addClass('error').nextAll('.error-message').text(val);
                });
            }
        }
    });
});
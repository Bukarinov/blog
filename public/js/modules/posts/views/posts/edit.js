define(['backbone', 'underscore', 'validation', 'marionette', 'modules/posts/models/post', 'hbs!modules/posts/templates/posts/edit', 'jquery-serialize-object'],
function(Backbone, _, Validation, Marionette, Post, EditTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: EditTpl,
        ui: {
            title: '#title',
            description: '#description'
        },
        events: {
            'submit form': '_submitPostCallback'
        },

        _submitPostCallback: function(e) {
            e.preventDefault();

            var post = new Post($(e.currentTarget).serializeObject());

            var res = post.save(null, {
                wait: true,
                success: function() {
                    Backbone.history.navigate('/', {trigger: true});
                }
            });

            if (res === false) {
                var that = this;

                this.$el.find('.error').removeClass('error');
                this.$el.find('.error-message').text('');

                _.each(post.validationError, function(val, key) {
                    that.ui[key].addClass('error').nextAll('.error-message').text(val);
                });
            }
        }
    });
});
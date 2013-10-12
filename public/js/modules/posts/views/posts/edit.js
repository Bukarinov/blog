define(['backbone', 'validation', 'marionette', 'modules/posts/models/post', 'hbs!modules/posts/templates/posts/edit', 'jquery-serialize-object'],
function(Backbone, Validation, Marionette, Post, EditTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: EditTpl,
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
                console.log(post.validationError);
            }
        }
    });
});
define(['backbone', 'marionette', 'modules/posts/models/post', 'hbs!modules/posts/templates/edit', 'jquery-serialize-object'],
function(Backbone, Marionette, Post, EditTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: EditTpl,
        events: {
            'submit form': '_submitPostCallback'
        },

        _submitPostCallback: function(e) {
            e.preventDefault();

            var post = new Post($(e.currentTarget).serializeObject());

            if (!post.isValid()) {
                // @TODO Doesn't work
            } else {
                var res = post.save(null, {
                    validate: false,
                    wait: true,
                    success: function() {
                        // @TODO Doesn't wait for save
                        Backbone.history.navigate('/', {trigger: true});
                    }
                });
            }
        }
    });
});
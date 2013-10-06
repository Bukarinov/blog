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

            if (post.get('id') == '') {
                post.set('id', null);
            }

            if (!post.isValid()) {
                // @TODO Doesn't work
            } else {
                post.save().done(function() {
                    Backbone.history.navigate('/', {trigger: true});
                });
            }
        }
    });
});
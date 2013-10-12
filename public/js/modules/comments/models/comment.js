define(['backbone', 'associations'],
function(Backbone) {
    return Backbone.AssociatedModel.extend({
        urlRoot: 'http://blogapi.bukarinov.ru/comments',
        defaults: {
            text: '',
            postId: null
        },
        validation: {
            text: {
                required: true,
                minLength: 1
            },
            postId: {
                required: true
            }
        }
    });
});
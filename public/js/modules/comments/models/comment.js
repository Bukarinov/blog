define(['backbone', 'modules/posts/models/post', 'validation', 'associations'],
function(Backbone, Post) {
    return Backbone.AssociatedModel.extend({
        urlRoot: 'http://blogapi.bukarinov.ru/comments',
        defaults: {
            text: '',
            postId: null
        },
        validation: {
            text: [{
                required: true
            }],
            postId: [{
                required: true
            }]
        }
    });
});
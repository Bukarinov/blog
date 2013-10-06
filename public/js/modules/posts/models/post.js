define(['backbone', 'modules/comments/models/comment', 'modules/comments/collections/comments', 'localstorage', 'validation', 'associations'],
function(Backbone, Comment, Comments) {
    return Backbone.AssociatedModel.extend({
        localStorage: new Backbone.LocalStorage("posts"),
        defaults: {
            title: '',
            description: '',
            comments: []
        },
        relations: [
            {
                type: Backbone.Many,
                key: 'comments',
                collectionType: Comments
            }
        ],
        validation: {
            title: {
                required: true
            },
            description: {
                required: true
            }
        }
    });
});
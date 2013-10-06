define(['backbone', 'modules/comments/models/comment', 'modules/comments/collections/comments', 'localstorage', 'validation', 'associations'],
function(Backbone, Comment, Comments) {
    return Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage("posts"),
        defaults: {
            title: '',
            description: '',
            comments: new Comments()
        },
        relations: [
            {
                type: Backbone.Many,
                key: 'comments',
                relatedModel: Comment,
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
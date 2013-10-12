define(['backbone', 'modules/comments/models/comment', 'modules/comments/collections/comments', 'associations'],
function(Backbone, Comment, Comments) {
    return Backbone.AssociatedModel.extend({
        urlRoot: 'http://blogapi.bukarinov.ru/posts',
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
                required: true,
                minLength: 1
            },
            description: {
                required: true,
                minLength: 30
            }
        }
    });
});
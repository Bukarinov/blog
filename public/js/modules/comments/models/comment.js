define(['backbone', 'modules/posts/models/post', 'localstorage', 'validation', 'associations'], function(Backbone, Post) {
    return Backbone.AssociatedModel.extend({
        localStorage: new Backbone.LocalStorage("comments"),
        defaults: {
            text: ''
        },
        /*relations: [
            {
                type: Backbone.One,
                key: 'post',
                relatedModel: Post
            }
        ],*/
        validation: {
            text: {
                required: true
            }
        }
    });
});
define(['backbone', 'modules/comments/models/comment'], function(Backbone, Comment) {
    return Backbone.Collection.extend({
        url: 'http://blogapi.bukarinov.ru/comments',
        model: Comment
    });
});
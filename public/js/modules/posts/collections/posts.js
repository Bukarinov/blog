define(['backbone', 'modules/posts/models/post'], function(Backbone, Post) {
    return Backbone.Collection.extend({
        url: 'http://blogapi.bukarinov.ru/posts',
        model: Post
    });
});
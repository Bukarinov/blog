define(['backbone', 'modules/posts/models/post', 'localstorage'], function(Backbone, Post, LocalStorage) {
    return Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage("posts"),
        model: Post
    });
});
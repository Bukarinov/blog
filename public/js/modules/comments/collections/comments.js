define(['backbone', 'modules/comments/models/comment', 'localstorage'], function(Backbone, Comment) {
    return Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage("comments"),
        model: Comment
    });
});
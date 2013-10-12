define(['backbone', 'marionette', 'hbs!modules/posts/templates/posts/list/post'],
function(Backbone, Marionette,  PostTpl) {
    return Backbone.Marionette.ItemView.extend({
        tagName: 'li',
        template: PostTpl
    });
});
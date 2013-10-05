define(['backbone', 'marionette', 'hbs!modules/posts/templates/post'],
function(Backbone, Marionette,  PostTpl) {
    return Backbone.Marionette.ItemView.extend({
        tagName: 'li',
        template: PostTpl
    });
});
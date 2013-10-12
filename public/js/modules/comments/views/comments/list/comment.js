define(['backbone', 'marionette', 'hbs!modules/comments/templates/comments/list/comment'],
function(Backbone, Marionette, CommentTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: CommentTpl
    });
});
define(['backbone', 'marionette', 'hbs!modules/comments/templates/comment'],
function(Backbone, Marionette, CommentTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: CommentTpl
    });
});
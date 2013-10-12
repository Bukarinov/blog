define(['backbone', 'marionette', 'hbs!modules/posts/templates/posts/show'],
function(Backbone, Marionette,  ShowTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: ShowTpl
    });
});
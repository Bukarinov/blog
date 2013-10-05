define(['backbone', 'marionette', 'hbs!modules/posts/templates/show'],
function(Backbone, Marionette,  ShowTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: ShowTpl
    });
});
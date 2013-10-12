define(['backbone', 'marionette', 'hbs!modules/common/templates/error/notFound'],
function(Backbone, Marionette, tpl) {
    return Backbone.Marionette.ItemView.extend({
        template: tpl
    });
});
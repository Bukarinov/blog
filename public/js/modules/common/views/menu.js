define(['backbone', 'marionette', 'hbs!modules/common/templates/menu'],
function(Backbone, Marionette, menuTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: menuTpl
    });
});
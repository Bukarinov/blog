define(['backbone', 'marionette', 'hbs!modules/common/templates/menu'],
function(Backbone, Marionette, menuTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: menuTpl,
        events: {
            'click a': '_onClickLink'
        },

        _onClickLink: function(e) {
            e.preventDefault();

            Backbone.history.navigate($(e.currentTarget).attr('href'), {trigger: true});
        }
    });
});
define(['backbone', 'marionette', 'hbs!modules/common/templates/menu', 'styl!modules/common/styles/menu'],
function(Backbone, Marionette, menuTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: menuTpl,
        events: {
            'click a': '_onClickLink'
        },

        _onClickLink: function(e) {
            e.preventDefault();

            Backbone.history.navigate(this.$(e.currentTarget).attr('href'), {trigger: true});
        }
    });
});
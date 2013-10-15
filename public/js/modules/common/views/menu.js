define(['backbone', 'marionette', 'hbs!modules/common/templates/menu'],
function(Backbone, Marionette, menuTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: menuTpl,
        ui: {
            menu: 'menu',
            links: 'a'
        },
        events: {
            'click a': '_onClickLink'
        },

        _onClickLink: function(e) {
            e.preventDefault();

            Backbone.history.navigate(this.$(e.currentTarget).attr('href'), {trigger: true});

            this.ui.links.removeClass('active');
            this.ui.menu.find('a[href="/' + Backbone.history.fragment + '"]').addClass('active');
        }
    });
});
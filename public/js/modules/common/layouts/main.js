define(['backbone', 'marionette'], function(Backbone) {
    return new (Backbone.Marionette.Layout.extend({
        template: 'body',
        el: document.body,
        regions: {
            headerRegion: 'header',
            contentRegion: 'section',
            footerRegion: 'footer'
        },
        events: {
            'click a': '_clickLinkCallback'
        },

        _clickLinkCallback: function(e) {
            e.preventDefault();

            Backbone.history.navigate($(e.currentTarget).attr('href'), {trigger: true});
        }
    }));
});
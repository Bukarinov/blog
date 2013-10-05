define(['backbone', 'marionette'], function(Backbone) {
    return new (Backbone.Marionette.Layout.extend({
        template: 'body',
        el: document.body,

        regions: {
            headerRegion: 'header',
            contentRegion: 'section',
            footerRegion: 'footer'
        }
    }));
});
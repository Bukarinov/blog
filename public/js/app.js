define(['backbone', 'marionette', 'modules/common/views/menu'],
function(Backbone, Marionette, MenuView) {
    var app = new Backbone.Marionette.Application();

    app.addRegions({
        headerRegion: 'header',
        contentRegion: 'section',
        footerRegion: 'footer'
    });
    app.addInitializer(function () {
        app.headerRegion.show(new MenuView());
    });

    return app;
});
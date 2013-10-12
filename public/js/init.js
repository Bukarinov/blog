define(['config'], function() {
    require([
        'app', 'validation', 'modules/common/routers/error', 'modules/common/routers/main', 'modules/posts/routers/posts'
    ], function(app, validation, ErrorRouter, MainRouter, PostsRouter) {
        _.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

        app.start();

        /*
            @TODO Refactor it
            It should be in the app.addInitializer method, but it doesn't work there
         */
        new ErrorRouter();
        new MainRouter();
        new PostsRouter();

        Backbone.history.start({pushState: true});
    });
});
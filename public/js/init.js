define(['config'], function() {
    require(['app', 'validation', 'modules/posts/routers/posts'], function(app, validation, PostsRouter) {
        _.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

        app.start();

        /*
            @TODO Refactor it
            It should be in the app.addInitializer method, but it doesn't work there
         */
        new PostsRouter();

        Backbone.history.start({pushState: true});
    });
});
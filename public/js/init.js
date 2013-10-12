define(['config'], function() {
    require(['app', 'modules/posts/routers/posts'], function(app, PostsRouter) {
        app.start();
        /*
            @TODO Refactor it
            It should be in the app.addInitializer method, but it doesn't work there
         */
        new PostsRouter();

        Backbone.history.start({pushState: true});
    });
});
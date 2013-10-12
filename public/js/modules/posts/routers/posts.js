define(['backbone', 'marionette', 'modules/posts/controllers/posts'],
function(Backbone, Marionette, Controller) {
    return Backbone.Marionette.AppRouter.extend({
        controller: new Controller,
        appRoutes: {
            "post": "list",
            "post/new": "new",
            "post/:id": "show",
            "post/:id/edit": "edit"
        }
    });
});
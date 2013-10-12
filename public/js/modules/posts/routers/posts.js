define(['backbone', 'marionette', 'modules/posts/controllers/posts'],
 function(Backbone, Marionette, Controller) {
    return Backbone.Marionette.AppRouter.extend({
        controller: new Controller,
        appRoutes: {
            "": "listAction",
            "post/new": "newAction",
            "post/:id": "showAction",
            "post/:id/edit": "editAction"
        }
    });
});
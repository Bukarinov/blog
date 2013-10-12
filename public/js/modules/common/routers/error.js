define(['backbone', 'marionette', 'modules/common/controllers/error'],
 function(Backbone, Marionette, Controller) {
    return Backbone.Marionette.AppRouter.extend({
        controller: new Controller,
        appRoutes: {
            "*path": "notFound"
        }
    });
});
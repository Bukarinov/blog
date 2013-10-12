define(['backbone', 'marionette', 'modules/common/controllers/main'],
 function(Backbone, Marionette, Controller) {
    return Backbone.Marionette.AppRouter.extend({
        controller: new Controller,
        appRoutes: {
            "": "index"
        }
    });
});
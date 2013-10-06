define(['backbone', 'localstorage', 'validation'], function(Backbone) {
    return Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage("comments"),
        defaults: {
            text: ''
        },
        validation: {
            text: {
                required: true
            }
        }
    });
});
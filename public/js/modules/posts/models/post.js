define(['backbone', 'localstorage', 'validation'], function(Backbone) {
    return Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage("posts"),
        defaults: {
            title: '',
            description: ''
        },
        validation: {
            title: {
                required: true
            },
            description: {
                required: true
            }
        }
    });
});
define(['backbone', 'localstorage'], function(Backbone, LocalStorage) {
    return Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage("posts"),
        defaults: {
            id: null,
            title: '',
            description: ''
        }
    });
});
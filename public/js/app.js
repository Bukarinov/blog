requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'bower_components/jquery/jquery',
        'underscore': 'bower_components/underscore/underscore',
        'backbone': 'bower_components/backbone/backbone',
        'backbone.localStorage': 'bower_components/backbone.localStorage-min/backbone.localStorage',
        'handlebars': 'bower_components/handlebars.js/dist/handlebars.runtime',
        'hbs': 'bower_components/hbs/hbs'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});


requirejs(['jquery', 'backbone'],
function($, Backbone) {

});
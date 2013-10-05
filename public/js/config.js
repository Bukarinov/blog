require.config({
    baseUrl: '/js',
    paths: {
        'jquery': 'bower_components/jquery/jquery',
        'underscore': 'bower_components/lodash/dist/lodash.underscore',
        'backbone': 'bower_components/backbone/backbone',
        'localstorage': 'bower_components/backbone.localStorage/backbone.localStorage',
        'marionette': 'bower_components/backbone.marionette/lib/backbone.marionette',
        'handlebars': 'bower_components/handlebars.js/dist/handlebars',
        'hbs': 'bower_components/hbs/hbs',
        'json2': 'bower_components/hbs/hbs/json2',
        'i18nprecompile': 'bower_components/hbs/hbs/i18nprecompile'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        marionette : {
            deps : ['jquery', 'underscore', 'backbone'],
            exports : 'Marionette'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    hbs: {
        disableI18n: true,
        disableHelpers: true
    }
});
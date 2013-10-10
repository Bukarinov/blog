require.config({
    baseUrl: '/js',
    paths: {
        'jquery': 'bower_components/jquery/jquery',
        'jquery-serialize-object': 'bower_components/jquery-serialize-object/jquery.serialize-object',
        'underscore': 'bower_components/lodash/dist/lodash.underscore',
        'backbone': 'bower_components/backbone/backbone',
        'marionette': 'bower_components/backbone.marionette/lib/backbone.marionette',
        'validation': 'bower_components/backbone-validation/dist/backbone-validation',
        'associations': 'bower_components/backbone-associations/backbone-associations',
        'handlebars': 'bower_components/handlebars.js/dist/handlebars',
        'hbs': 'bower_components/hbs/hbs',
        'json2': 'bower_components/hbs/hbs/json2',
        'i18nprecompile': 'bower_components/hbs/hbs/i18nprecompile'
    },
    shim: {
        'jquery-serialize-object' : {
            deps : ['jquery']
        },
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
        validation : {
            deps : ['jquery', 'backbone']
        },
        associations: {
            deps : ['backbone']
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
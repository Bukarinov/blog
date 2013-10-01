requirejs.config({
    baseUrl: '/js',
    paths: {
        'jquery': 'bower_components/jquery/jquery',
        'underscore': 'bower_components/lodash/dist/lodash.underscore',
        'backbone': 'bower_components/backbone/backbone',
        'localstorage': 'bower_components/backbone.localStorage/backbone.localStorage',
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
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    hbs: {
        disableI18n: true,
        disableHelpers: true
    }
});


requirejs(['backbone', 'modules/posts/route', 'modules/posts/models/posts', 'modules/posts/models/post'], function(Backbone, postsRoute, Posts, Post) {
    /*var posts = new Posts();

    posts.create({
        title: 'test1',
        description: 'test1 desc'
    });
    posts.create({
        title: 'test2',
        description: 'test2 desc'
    });
    posts.create({
        title: 'test3',
        description: 'test3 desc'
    });*/

    Backbone.history.start({pushState: true});
});
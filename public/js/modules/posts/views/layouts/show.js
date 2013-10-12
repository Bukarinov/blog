define(['backbone', 'marionette', 'hbs!modules/posts/templates/layouts/show'],
function(Backbone, Marionette, ShowTpl) {
    return new (Backbone.Marionette.Layout.extend({
        template: ShowTpl,

        regions: {
            postRegion: '#post',
            commentsRegion: '#comments'
        }
    }));
});
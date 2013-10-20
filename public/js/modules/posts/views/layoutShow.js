define(['backbone', 'marionette', 'hbs!modules/posts/templates/layoutShow'],
function(Backbone, Marionette, ShowTpl) {
    return Backbone.Marionette.Layout.extend({
        template: ShowTpl,
        regions: {
            postRegion: '#post',
            commentsRegion: '#comments'
        }
    });
});
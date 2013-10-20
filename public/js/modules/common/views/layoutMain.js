define(['backbone', 'marionette', 'hbs!modules/common/templates/layoutMain'],
function(Backbone, Marionette, MainTpl) {
    return Backbone.Marionette.Layout.extend({
        template: MainTpl,
        regions: {
            postsRegion: '#posts'
        }
    });
});
define(['backbone', 'marionette', 'hbs!modules/common/templates/layouts/main'],
function(Backbone, Marionette, MainTpl) {
    return new (Backbone.Marionette.Layout.extend({
        template: MainTpl,
        regions: {
            postsRegion: '#posts'
        }
    }));
});
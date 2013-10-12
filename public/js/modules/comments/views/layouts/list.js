define([
    'backbone',
    'marionette',
    'hbs!modules/comments/templates/layouts/list',
    'modules/comments/views/comments/list',
    'modules/comments/views/comments/edit'
], function(Backbone, Marionette, ListLayoutTpl, ListView, EditView, Comments) {
    return new (Backbone.Marionette.Layout.extend({
        template: ListLayoutTpl,
        regions: {
            listRegion: '#comments-list',
            addRegion: '#add-comment'
        },

        onShow: function() {
            this.listRegion.show(new ListView({collection: this.collection}));
            this.addRegion.show(new EditView({model: this.model}));
        }
    }));
});
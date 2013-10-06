define([
    'backbone',
    'marionette',
    'hbs!modules/comments/templates/layouts/list',
    'modules/comments/views/list',
    'modules/comments/views/edit'
], function(Backbone, Marionette, ListLayoutTpl, ListView, EditView, Comments) {
    return new (Backbone.Marionette.Layout.extend({
        template: ListLayoutTpl,
        regions: {
            listRegion: '#comments-list',
            addRegion: '#add-comment'
        },

        onShow: function() {
            this.listRegion.show(new ListView({collection: this.collection}));

            var editView = new EditView();
            editView.parentObj = this.parentObj;

            this.addRegion.show(editView);
        }
    }));
});
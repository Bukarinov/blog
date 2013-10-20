define(['backbone', 'marionette', 'hbs!modules/posts/templates/posts/show'],
function(Backbone, Marionette,  ShowTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: ShowTpl,
        initialize : function () {
            this.listenTo(this.model, 'beforeFetch', this._onBeforeFetch);
            this.listenTo(this.model, 'afterFetch', this._onAfterFetch);
            this.listenTo(this.model, 'errorFetch', this._onErrorFetch);
        },

        _onBeforeFetch: function() {
            this.$el.addClass('loading');
        },
        _onAfterFetch: function() {
            this.$el.removeClass('loading');
        },
        _onErrorFetch: function() {
            // @TODO Trigger global error "Something goes wrong!"
        }
    });
});
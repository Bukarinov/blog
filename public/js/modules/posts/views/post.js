define(['backbone', 'hbs!modules/posts/templates/post'], function(Backbone, postTpl) {
    return Backbone.View.extend({
        el: document.body,
        
        initialize: function() {
            this.listenTo(this.model, 'fetched', this.render);
        },
        render: function() {
            this.$el.html(postTpl(this.model.toJSON()));

            return this;
        }
    });
});
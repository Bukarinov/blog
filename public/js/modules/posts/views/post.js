define(['backbone', 'hbs!modules/posts/templates/post'], function(Backbone, postTpl) {
    return Backbone.View.extend({
        render: function() {
            this.$el.html(postTpl(this.model.toJSON()));

            return this;
        }
    });
});
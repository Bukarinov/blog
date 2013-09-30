define(['backbone', 'hbs!modules/posts/templates/posts'], function(Backbone, postsTpl) {
    return Backbone.View.extend({
        render: function() {
            this.$el.html(postsTpl({posts: this.collection.toJSON()}));

            return this;
        }
    });
});

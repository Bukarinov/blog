define(['backbone', 'hbs!modules/posts/templates/posts'], function(Backbone, postsTpl) {
    return Backbone.View.extend({
        el: document.body,

        initialize: function() {
            this.listenTo(this.collection, 'fetched', this.render);
        },
        render: function() {
            this.$el.html(postsTpl({posts: this.collection.toJSON()}));

            return this;
        }
    });
});

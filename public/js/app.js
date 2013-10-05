require(['config'], function() {
    require(['backbone', 'modules/posts/router', 'modules/common/layouts/main', 'modules/common/views/menu'],
    function(Backbone, postsRouter, layout, MenuView) {
        layout.render();
        layout.headerRegion.show(new MenuView());

        Backbone.history.start({pushState: true});
    });
});
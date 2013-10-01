require(['config'], function() {
    require(['backbone', 'modules/posts/route', 'modules/posts/models/posts', 'modules/posts/models/post'], function(Backbone, postsRoute, Posts, Post) {
        /*var posts = new Posts();

         posts.create({
         title: 'test1',
         description: 'test1 desc'
         });
         posts.create({
         title: 'test2',
         description: 'test2 desc'
         });
         posts.create({
         title: 'test3',
         description: 'test3 desc'
         });*/

        Backbone.history.start({pushState: true});
    });
});
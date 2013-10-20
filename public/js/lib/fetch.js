(function() {
    var collectionFetch = Backbone.Collection.prototype.fetch;

    Backbone.Collection.prototype.fetch = function() {
        this.trigger('beforeFetch');

        var args = Array.prototype.slice.call(arguments),
            defaultParams = {
                success: _.bind(function(collection, response, options) {
                    this.trigger('successFetch');
                    this.trigger('afterFetch');
                }, this),
                error: _.bind(function(collection, response, options) {
                    this.trigger('errorFetch');
                    this.trigger('afterFetch');
                }, this)
            };

        if (!args[0]) {
            args.unshift(defaultParams);
        } else {
            _.defaults(args[0], defaultParams);
        }

        return collectionFetch.apply(this, args);
    };

    var modelFetch = Backbone.Model.prototype.fetch;

    Backbone.Model.prototype.fetch = function() {
        this.trigger('beforeFetch');

        var args = Array.prototype.slice.call(arguments),
            defaultParams = {
                success: _.bind(function(collection, response, options) {
                    this.trigger('successFetch');
                    this.trigger('afterFetch');
                }, this),
                error: _.bind(function(collection, response, options) {
                    this.trigger('errorFetch');
                    this.trigger('afterFetch');
                }, this)
            };

        if (!args[0]) {
            args.unshift(defaultParams);
        } else {
            _.defaults(args[0], defaultParams);
        }

        return modelFetch.apply(this, args);
    };
})();
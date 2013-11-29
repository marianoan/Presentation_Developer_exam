define([
    'jquery',
    'backbone',
    'app'
], function ($, Backbone, App) {

   return Backbone.Router.extend({
        routes: {
            'new': 'newComic',
            'collection': 'collection',
            'statistics': 'statistics',
             '': 'index'
        },

        initialize: function () {
            app = new App()
            Backbone.history.start();

        },

        newComic: function () {
           app.setNewView();
       },

        index: function () {
            app.collection.fetch();
            app.setDefaultView();
           
       }
   });

});


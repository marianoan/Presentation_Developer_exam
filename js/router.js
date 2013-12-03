define([
    'jquery',
    'underscore',
    'backbone',
    'app'
], function ($, _, Backbone, App) {

   return Backbone.Router.extend({
        routes: {
            'new': 'newComic',
            'editComic': 'editComic',
            'statistics': 'statistics',
             '': 'index'
        },

        initialize: function () {
            app = new App();
            Backbone.history.start();
        },

        newComic: function () {
           app.setNewView();
        },

        statistics: function () {
            app.setStatsView();
        },

        editComic: function () {
            //app.setEditView();
        },

        index: function () {
            app.collection.fetch();
            app.setDefaultView();
           
       }
   });

});


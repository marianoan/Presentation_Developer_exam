/*
* @Author: Mariano Gonzalez
*/
define([
  'foundation',
  'underscore',
  'backbone',
  'collections/Items',
  'views/SidebarView',
  'views/ThumbnailView',
  'views/AddView',
  'models/Item'
], function ($, _, Backbone, Items, SidebarView, ThumbnailView, AddView, Item) {

    return Backbone.View.extend({

        el: '#comicApp',

        //View events
        events: {
            //'click #alert': 'closeAlert',
            //'click #alertEmpty': 'closeAlertEmpty',
        },

        //Initialize the view
        initialize: function () {

            
            this.collection = new Items();
            this.route = 'index';
            this.$content = this.$('#content');

            this.setDefaultView();
            
            this.listenTo(this.collection, 'add', this.addOne);
            this.listenTo(this.collection, 'reset', this.addAll);
            //this.listenTo(this.collection, 'change', this.setNewView);
            this.on('post-render', this.onPostRender, this);

            this.collection.fetch();
        },

        onPostRender: function () {
            $(this.el).foundation();
        },


        addOne: function (item) {
            //console.log('index');
            var view = new ThumbnailView({ model: item });
            this.$('#thumbs').append(view.render().el);
        },

        addAll: function () {
            this.$('#thumbs').html('');
            this.collection.each(this.addOne, this);
        },



        setDefaultView: function () {
            this.route = 'index';
            console.log('index');
            this.$content.html('');
            var view = new SidebarView({
                collectionLenght: this.collection.comicsInCollection(),
                title: 'My collection',
                text: 'Risus ligula, aliquam nec fermentum vitae, sollicitudin eget urna. Donec dignissim nibh fermentum odio ornare sagittis.'
            });
            this.$content.append(view.render().el);
            this.$content.append('<div class="large-8 columns"><div class="row" id="thumbs"></div></div>');
            this.addAll();

        },

        setNewView: function () {
            this.route = 'new';
            console.log('new');
            this.$content.html('');
            var view = new SidebarView({
                collectionLenght: this.collection.comicsInCollection(),
                title: 'Adding new comic book',
                text: 'Risus ligula, aliquam nec fermentum vitae, sollicitudin eget urna. Donec dignissim nibh fermentum odio ornare sagittis.'
            });
            this.$content.append(view.render().el);
            //this.$content.append('<div class="large-8 columns" id="form"></div>');
            var addView = new AddView({
                collection: this.collection
            });
            //this.$('#form').append(addView.render().el);
            this.$content.append(addView.render().el);
        },


    });

});
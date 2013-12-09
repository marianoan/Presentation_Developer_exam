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
  'views/EditView',
  'views/StatsView',
  'models/Item'
], function ($, _, Backbone, Items, SidebarView, ThumbnailView, AddView, EditView, StatsView, Item) {

    return Backbone.View.extend({

        el: '#comicApp',

        //View events
        events: {
            //'click #alert': 'closeAlert',
            //'click #alertEmpty': 'closeAlertEmpty',
        },

        //Initialize the view
        initialize: function (options) {
            this.vent = _.extend({}, Backbone.Events);
            
            this.collection = new Items();
            this.route = 'index';
            this.$content = this.$('#content');

            

            this.setDefaultView();
            
            this.listenTo(this.collection, 'add', this.addOne);
            this.listenTo(this.collection, 'reset', this.addAll);
            this.listenTo(this.collection, 'change', this.test);
            this.on('post-render', this.onPostRender, this);

            _.bindAll(this, "setEditView");
            this.vent.bind("setEditView", this.setEditView);

            this.collection.fetch();
        },

        onPostRender: function () {
            $(this.el).foundation();
        },

        test: function () {
            console.log('test');
        },

        addOne: function (item) {
            //console.log('index');
            var view = new ThumbnailView({ model: item, vent: this.vent });
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
                vent: this.vent,
                count: true,
                text: 'Risus ligula, aliquam nec fermentum vitae, sollicitudin eget urna. Donec dignissim nibh fermentum odio ornare sagittis.',
                image: 'http://placehold.it/500x500&text=Logo'
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
                vent: this.vent,
                count: true,
                text: 'Risus ligula, aliquam nec fermentum vitae, sollicitudin eget urna. Donec dignissim nibh fermentum odio ornare sagittis.',
                image: 'http://placehold.it/500x500&text=Logo'
            });
            this.$content.append(view.render().el);
            var addView = new AddView({
                collection: this.collection
            });
            this.$content.append(addView.render().el);
        },

        setEditView: function (model) {
            this.route = 'edit';
            console.log('edit');
            this.$content.html('');
            var title = model.get('title');
            if (model.get('issueNo') != '') {
                title += ' #' + model.get('issueNo');
            }
            var view = new SidebarView({
                collectionLenght: this.collection.comicsInCollection(),
                title: title,
                vent: this.vent,
                count: false,
                text: '',
                image: model.get('cover')
            });
            this.$content.append(view.render().el);
            var editView = new EditView({
                model: model
            });
            this.$content.append(editView.render().el);
        },

        setStatsView: function () {
            this.route = 'stats';
            console.log('stats');
            this.$content.html('');
            var statsView = new StatsView();
            this.$content.append(statsView.render().el);
        },


    });

});
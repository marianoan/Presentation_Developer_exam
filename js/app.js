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
        },

        //Initialize the view
        initialize: function (options) {
            this.vent = _.extend({}, Backbone.Events);
            
            this.collection = new Items();
            this.route = 'index';
            this.$content = this.$('#content');

            //add content to the collection
            this.collection.create(this.attributes('Watchmen', 200, '', 'DC Comics', 'http:\/\/kalafudra.files.wordpress.com/2009/03/watchmen-cover.jpg', 'Spain', 'Lebowski ipsum this is quite a pad you got here, man. Completely unspoiled. Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. We ve got a man down, Dude. Quis elit blandit fringilla a ut. I m saying, Cynthias Pomeranian. I m looking after it while Cynthia and Marty Ackerman are in Hawaii. Turpis praesent felis ligula, malesuada suscipit malesuada non, ultrices non. Whose toe was it, Walter? Urna sed orci ipsum, placerat id condimentum rutrum, rhoncus ac lorem aliquam placerat.', 'ECC Ediciones', 'Alan Moore, Dave Gibbons', '12/04/2013', '12/13/2013', '12/04/2013', 'Rayos y centellas'));
            this.collection.create(this.attributes('V of Vendetta', 250, '', 'DC Comics', 'http:\/\/www.scifinow.co.uk/wp-content/uploads/2010/04/vendetta.jpg', 'USA', 'Lebowski ipsum this is quite a pad you got here, man. Completely unspoiled. Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. We ve got a man down, Dude. Quis elit blandit fringilla a ut. I m saying, Cynthias Pomeranian. I m looking after it while Cynthia and Marty Ackerman are in Hawaii. Turpis praesent felis ligula, malesuada suscipit malesuada non, ultrices non. Whose toe was it, Walter? Urna sed orci ipsum, placerat id condimentum rutrum, rhoncus ac lorem aliquam placerat.', 'ECC Ediciones', 'Alan Moore, David Lloyd', '12/04/2013', '12/13/2013', '12/04/2013', 'Rayos y centellas'));
            this.collection.create(this.attributes('Superman Red Son', 100, '', 'DC Comics', 'http:\/\/smaxxcast.com/wp-content/uploads/2013/02/Red-Son-Cover.jpg', 'Spain', 'Lebowski ipsum this is quite a pad you got here, man. Completely unspoiled. Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. We ve got a man down, Dude. Quis elit blandit fringilla a ut. I m saying, Cynthias Pomeranian. I m looking after it while Cynthia and Marty Ackerman are in Hawaii. Turpis praesent felis ligula, malesuada suscipit malesuada non, ultrices non. Whose toe was it, Walter? Urna sed orci ipsum, placerat id condimentum rutrum, rhoncus ac lorem aliquam placerat.', 'ECC Ediciones', 'Mark Millar, Kilian Plunkett', '12/04/2013', '12/13/2013', '12/04/2013', 'Rayos y centellas'));
            this.collection.create(this.attributes('Lovecraft', 200, '', 'Vertigo', 'http:\/\/www.spandexless.com/wp-content/uploads/2011/10/965301.jpg', 'Spain', 'Lebowski ipsum this is quite a pad you got here, man. Completely unspoiled. Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. We ve got a man down, Dude. Quis elit blandit fringilla a ut. I m saying, Cynthias Pomeranian. I m looking after it while Cynthia and Marty Ackerman are in Hawaii. Turpis praesent felis ligula, malesuada suscipit malesuada non, ultrices non. Whose toe was it, Walter? Urna sed orci ipsum, placerat id condimentum rutrum, rhoncus ac lorem aliquam placerat.', 'Planeta DeAgostini', 'Hans Rodionoff, Enrique Breccia', '12/04/2013', '12/13/2013', '12/04/2013', 'Rayos y centellas'));
            this.collection.create(this.attributes('Kick Ass', 200, '', 'Dark Horse', 'http:\/\/4.bp.blogspot.com/_eL5n6gDFLYg/TBZ9FikhlNI/AAAAAAAAFH4/QYENPb-sc50/s1600/Kick-Ass-Comic-Cover.jpg', 'Spain', 'Lebowski ipsum this is quite a pad you got here, man. Completely unspoiled. Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. We ve got a man down, Dude. Quis elit blandit fringilla a ut. I m saying, Cynthias Pomeranian. I m looking after it while Cynthia and Marty Ackerman are in Hawaii. Turpis praesent felis ligula, malesuada suscipit malesuada non, ultrices non. Whose toe was it, Walter? Urna sed orci ipsum, placerat id condimentum rutrum, rhoncus ac lorem aliquam placerat.', 'Ovni Press', 'Mark Millar John Romita', '12/04/2013', '12/13/2013', '12/04/2013', 'Rayos y centellas'));
            
            this.setDefaultView();
            
            this.listenTo(this.collection, 'add', this.addOne);
            this.listenTo(this.collection, 'reset', this.addAll);
            this.listenTo(this.collection, 'change', this.test);
            this.on('post-render', this.onPostRender, this);

            _.bindAll(this, "setEditView");
            this.vent.bind("setEditView", this.setEditView);

            this.collection.fetch();
        },

        //
        attributes: function (title, purchasePrice, issueNo, publisher, cover, country, plot, printedBy, authors, releaseDate, coverDate, purchaseDate, store) {
            return {
                id: this.collection.nextOrder(),
                title: title,
                purchasePrice: purchasePrice,
                issueNo: issueNo,
                publisher: publisher,
                cover: cover,
                country: country,
                plot: plot,
                printedBy: printedBy,
                authors: authors,
                releaseDate: releaseDate,
                coverDate: coverDate,
                purchaseDate: purchaseDate,
                store: store
            };
        },

        //
        onPostRender: function () {
            $(this.el).foundation();
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

        //View for the index
        setDefaultView: function () {
            this.route = 'index';
            console.log('index');
            this.$content.html('');
            var view = new SidebarView({
                collectionLenght: this.collection.comicsInCollection(),
                title: 'My collection',
                vent: this.vent,
                count: true,
                item: false,
                text: 'Risus ligula, aliquam nec fermentum vitae, sollicitudin eget urna. Donec dignissim nibh fermentum odio ornare sagittis.',
                image: 'http://placehold.it/500x500&text=Logo'
            });
            this.$content.append(view.render().el);
            this.$content.append('<div class="large-8 columns"><div class="row" id="thumbs"></div></div>');
            this.addAll();

        },

        //View for adding new comic
        setNewView: function () {
            this.route = 'new';
            console.log('new');
            this.$content.html('');
            var view = new SidebarView({
                collectionLenght: this.collection.comicsInCollection(),
                title: 'Adding new comic book',
                vent: this.vent,
                count: true,
                item: false,
                text: 'Risus ligula, aliquam nec fermentum vitae, sollicitudin eget urna. Donec dignissim nibh fermentum odio ornare sagittis.',
                image: 'http://placehold.it/500x500&text=Logo'
            });
            this.$content.append(view.render().el);
            var addView = new AddView({
                collection: this.collection
            });
            this.$content.append(addView.render().el);
        },

        //View for edit and view comic
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
                count: true,
                item: true,
                text: '',
                image: model.get('cover')
            });
            this.$content.append(view.render().el);
            var editView = new EditView({
                model: model
            });
            this.$content.append(editView.render().el);
        },

        //Statistics view
        setStatsView: function () {
            this.route = 'stats';
            console.log('stats');
            this.$content.html('');
            var statsView = new StatsView({
                collection: this.collection
            });
            this.$content.append(statsView.render().el);
        },


    });

});
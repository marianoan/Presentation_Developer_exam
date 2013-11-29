/*
* @Author: Mariano Gonzalez
*/

define([
  'jqueryui',
  'underscore',
  'backbone',
  'text!AddTemplate.html'
], function ($, _, Backbone, AddTemplate) {

    var AddView = Backbone.View.extend({

        tagName: 'form',

        //Items events
        events: {
            'click #save': 'saveComic',
        },

        initialize: function () {
            this.template = _.template(AddTemplate);
        },

        //Renders the item
        render: function () {
            this.$el.html(this.template());
            this.$purchaseDate = this.$("#purchaseDate");
            this.$releaseDate = this.$("#releaseDate");
            this.$coverDate = this.$("#coverDate");
            this.$title = this.$("#title");

            this.$purchaseDate.datepicker();
            this.$releaseDate.datepicker();
            this.$coverDate.datepicker();
            return this;
        },

        newAttributes: function () {
            return {
                id: this.options.collection.nextOrder(),
                title: this.$title.val().trim(),
                purchasePrice: 0,
                issueNo: 0,
                publisher: 'publisher',
                cover: 'http://placehold.it/1000x1000&text=Thumbnail',
                country: 'country',
                plot: 'lorem ipsum dolor',
                printedBy: 'printedBy',
                authors: 'authors',
                releaseDate: this.$releaseDate.val().trim(),
                coverDate: this.$coverDate.val().trim(),
                purchaseDate: this.$purchaseDate.val().trim(),
                store: ''
            };
        },

        saveComic: function (event) {
            this.collection.create(this.newAttributes());
            /*this.$input_new_name.val('');
            this.$input_new_director.val('');
            this.$input_new_year.val('');
            this.$input_new_cast.val('');
            this.$input_new_sinopsis.val('');
            this.$input_new_img.val('http://placehold.it/370x175');
            this.view_movies_list();*/
        },

    });

    return AddView;
});



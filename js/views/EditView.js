/*
* @Author: Mariano Gonzalez
*/

define([
  'jqueryui',
  'underscore',
  'backbone',
  'text!templates/EditTemplate.html'
], function ($, _, Backbone, AddTemplate) {

    var EditView = Backbone.View.extend({

        tagName: 'div',
        className: 'large-8 columns',

        //Items events
        events: {
            'submit': 'saveComic',
        },

        initialize: function () {
            this.template = _.template(AddTemplate);
            this.on('post-render', this.onPostRender, this);
        },

        //Renders the item
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$purchaseDate = this.$("#purchaseDate");
            this.$releaseDate = this.$("#releaseDate");
            this.$coverDate = this.$("#coverDate");
            this.$title = this.$("#title");
            this.$issue = this.$("#issue");
            this.$publisher = this.$("#publisher");
            this.$printedBy = this.$("#printedBy");
            this.$country = this.$("#country");
            this.$plot = this.$("#plot");
            this.$authors = this.$("#authors");
            this.$cover = this.$("#cover");
            this.$price = this.$("#price");
            this.$store = this.$("#store");

            this.$purchaseDate.datepicker();
            this.$releaseDate.datepicker();
            this.$coverDate.datepicker();
            this.trigger('post-render');
            return this;
        },

        newAttributes: function () {
            return {
                id: this.options.collection.nextOrder(),
                title: this.$title.val().trim(),
                purchasePrice: this.$price.val().trim(),
                issueNo: this.$issue.val().trim(),
                publisher: this.$publisher.val().trim(),
                cover: this.$cover.val().trim(),
                country: this.$country.val().trim(),
                plot: this.$plot.val().trim(),
                printedBy: this.$printedBy.val().trim(),
                authors: this.$authors.val().trim(),
                releaseDate: this.$releaseDate.val().trim(),
                coverDate: this.$coverDate.val().trim(),
                purchaseDate: this.$purchaseDate.val().trim(),
                store: this.$store.val().trim()
            };
        },


        onPostRender: function () {
            $(this.el).foundation();
        },

        saveComic: function () {
            var title = this.$title.val().trim();
            var purchasePrice = this.$price.val().trim();
            var issueNo = this.$issue.val().trim();
            var publisher = this.$publisher.val().trim();
            var cover = this.$cover.val().trim();
            var country = this.$country.val().trim();
            var plot = this.$plot.val().trim();
            var printedBy = this.$printedBy.val().trim();
            var authors = this.$authors.val().trim();
            var releaseDate = this.$releaseDate.val().trim();
            var coverDate = this.$coverDate.val().trim();
            var purchaseDate = this.$purchaseDate.val().trim();
            var store = this.$store.val().trim();

            this.model.save({ title: title, purchasePrice: purchasePrice, issueNo: issueNo, publisher: publisher, cover: cover, country: country, plot: plot, printedBy: printedBy, authors: authors, releaseDate: releaseDate, coverDate: coverDate, purchaseDate: purchaseDate, store: store });
            $("#dialog-confirm").dialog({
                resizable: false,
                modal: true,
                buttons: {
                    "Ok": function () {
                        $(this).dialog("close");
                    }
                }
            });

            this.render();

        }

    });

    return EditView;
});



/*
* @Author: Mariano Gonzalez
*/

define([
  'jqueryui',
  'underscore',
  'backbone',
  'text!templates/AddTemplate.html',
  'upload'
], function ($, _, Backbone, AddTemplate) {

    var AddView = Backbone.View.extend({

        tagName: 'div',
        className: 'large-8 columns',

        //Items events
        events: {
            'submit': 'saveComic'
        },

        initialize: function () {
            this.template = _.template(AddTemplate);
            this.on('post-render', this.onPostRender, this);
        },

        //Renders the item
        render: function () {
            this.$el.html(this.template());
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
            //Backbone.TemplateManager.baseUrl = '{name}';
            /*var uploadManager = new Backbone.UploadManager({
                uploadUrl: 'http://sroze.github.io/backbone-upload-manager/upload',
                templates: {
                    main: 'templates/upload-manager.main',
                    file: 'templates/upload-manager.file'
                }
            });
            uploadManager.renderTo(this.$('#coverUpload'));  */
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

        saveComic: function (event) {
            this.collection.create(this.newAttributes());
            $("#dialog-confirm").dialog({
                resizable: false,
                modal: true,
                buttons: {
                    "Ok": function () {
                        $(this).dialog("close");
                    }
                }
            });


        },

        onPostRender: function () {
            $(this.el).foundation();
        }

    });

    return AddView;
});



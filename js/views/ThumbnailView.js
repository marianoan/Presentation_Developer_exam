/*
* @Author: Mariano Gonzalez
*/

define([
  'jquery',
  'underscore',
  'backbone',
  'models/Item',
  'text!ThumbnailTemplate.html'
], function ($, _, Backbone, Item, ThumbnailTemplate) {

    var ThumbnailView = Backbone.View.extend({

        tagName: 'div',
        className: 'large-4 small-6 columns',

        //Items events
        events: {
            //'click .addButton': 'addToCart',
            //'click #modifyButton': 'modifyQuantity',
            'click #delete': 'clear'
        },

        initialize: function () {
            //this.listenTo(this.model, 'destroy', this.remove);
            this.template = _.template(ThumbnailTemplate);
        },

        //Renders the item
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            //this.$alert = $('#alert')
            //this.$inCartIcon = this.$('#inCartIcon');
            //this.$modifyButton = this.$('#modifyButton');
            //this.$deleteButton = this.$('#deleteButton');
            //this.$addButton = this.$('.addButton');
            //this.$quantity = this.$('#quantity');
            return this;
        },



        //Destroy model
        clear: function () {
            this.model.destroy();
            this.remove();
            Backbone.history.navigate('#');
        },

       

        //add the item to cart
        addToCart: function () {
            var quantity = this.$('#quantity').val().trim();
            this.$alert.html('The item has been added to the cart');
            this.$alert.show();
            this.$inCartIcon.show();
            this.$modifyButton.show();
            this.$deleteButton.show();
            this.$addButton.hide();
            this.model.save({ quantity: quantity });
            this.model.toggle();
            Backbone.history.navigate('#');
        },

        //Modify quantity of items purchased
        modifyQuantity: function () {
            var quantity = this.$('#quantity').val().trim();
            this.model.save({ quantity: quantity });
            this.$alert.html('The quantity has been updated');
            this.$alert.show();
            Backbone.history.navigate('#');
        },



    });

    return ThumbnailView;
});



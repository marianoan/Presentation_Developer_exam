/*
* @Author: Mariano Gonzalez
*/

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/SidebarTemplate.html'
], function ($, _, Backbone, SidebarTemplate) {

    var SidebarView = Backbone.View.extend({

        tagName: 'div',
        className: 'large-4 small-12 columns',

        //Items events
        events: {
        },

        initialize: function (options) {
            this.template = _.template(SidebarTemplate);
            this.lenght = this.options.collectionLenght;
            //console.log(this.lenght);
            _.bindAll(this, "decreaseCollection");
            options.vent.bind("decreaseCollection", this.decreaseCollection);
        },

        //Renders the item
        render: function () {
            this.$el.html(this.template({ "collectionLenght": this.lenght, "count": this.options.count, "item": this.options.item, "title": this.options.title, "image": this.options.image, "text": this.options.text }));
            return this;
        },

        decreaseCollection: function () {
            this.lenght--;
            console.log(this.lenght);
            this.$('#quantity').text(this.lenght + ' comic books in your collection.')
        }


    });

    return SidebarView;
});



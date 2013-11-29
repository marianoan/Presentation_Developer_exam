/*
* @Author: Mariano Gonzalez
*/

define([
  'jquery',
  'underscore',
  'backbone',
  'text!SidebarTemplate.html'
], function ($, _, Backbone, SidebarTemplate) {

    var SidebarView = Backbone.View.extend({

        tagName: 'div',
        className: 'large-4 small-12 columns',

        //Items events
        events: {
        },

        initialize: function () {
            this.template = _.template(SidebarTemplate);
        },

        //Renders the item
        render: function () {
            this.$el.html(this.template({ "collectionLenght": this.options.collectionLenght, "title": this.options.title, "text": this.options.text }));
            return this;
        },

    });

    return SidebarView;
});



/*
* @Author: Mariano Gonzalez
*/
define([
  'underscore',
  'backbone',
  'localStorage',
  'models/Item'
], function (_, Backbone, localStorage, Item) {

    var Items = Backbone.Collection.extend({
        model: Item,

        localStorage: new localStorage('comicCollection'),

        nextOrder: function () {
            if (!this.length) {
                return 1;
            }
            return this.last().get('id') + 1;
        },

        /*inCart: function () {
            return this.filter(function (item) {
                return item.get('inCart');
            });
        },*/

        comicsInCollection: function () {
            if (!this.length) {
                return 0;
            }
            return this.length;
        }

        /*totalInCart: function () {
            var item;
            var total = 0;
            for (var i = 0; i < this.length; i++) {
                item = this.models[i];
                if (item.get('inCart')) {
                    total += (item.get('price') * item.get('quantity'));
                }
            }
            return total;
        },*/

        /*customFilter: function () {
            // reset the collection with the results
            var results = this.where({
                inCart: true
            });
            this.reset(results);
        }*/

    });
    // You don't usually return a collection instantiated
    return Items;
});

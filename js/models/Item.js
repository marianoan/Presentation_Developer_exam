/*
* @Author: Mariano Gonzalez
*/
define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    var Item = Backbone.Model.extend({
        

        defaults: {
            id: 0,
            title: 'title',
            purchasePrice: 0,
            issueNo: 0,
            publisher: 'publisher',
            cover: 'http://placehold.it/1000x1000&text=Thumbnail',
            country: 'country',
            plot: 'lorem ipsum dolor',
            printedBy: 'printedBy',
            authors: 'authors',
            releaseDate: '',
            coverDate: '',
            purchaseDate: '',
            store:''
        },

        /*toggle: function () {
            this.save({
                inCart: !this.get('inCart')
            });
        }*/
    });
    // Return the model for the module
    return Item;
});

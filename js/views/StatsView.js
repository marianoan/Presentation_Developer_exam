/*
* @Author: Mariano Gonzalez
*/

define([
  'jqueryui',
  'underscore',
  'backbone',
  'googleChart',
  'text!templates/StatsTemplate.html',
  'goog!visualization,1,packages:[corechart,geochart]'
], function ($, _, Backbone, GoogleChart, StatsTemplate) {

    var StatsView = Backbone.View.extend({

        tagName: 'div',
        className: 'large-12 columns',

        //Items events
        events: {
            //'submit': 'saveComic'
        },


        initialize: function () {
            this.template = _.template(StatsTemplate);

            var country = this.options.collection.groupBy( function(model){
                return model.get('country');
            });

            var publisher = this.options.collection.groupBy( function(model){
                return model.get('publisher');
            });

            var store = this.options.collection.groupBy( function(model){
                return model.get('store');
            });

            var publishers = new Array();
            var publishersQ = new Array();
            publishers.push('Publisher');
            publishersQ.push('Quantity');
            for (var p in publisher) {
                publishers.push(p);
                publishersQ.push(publisher[p].length);
            }

            var countries = new Array();
            var countriesQ = new Array();
            countries.push('Country');
            countriesQ.push('Quantity');
            for (var p in country) {
                countries.push(p);
                countriesQ.push(country[p].length);
            }

            var stores = new Array();
            var storesQ = new Array();
            stores.push('Store');
            storesQ.push('Quantity');
            for (var p in store) {
                stores.push(p);
                storesQ.push(store[p].length);
            }

            var publisherData = new Array();
            publisherData.push(publishers);
            publisherData.push(publishersQ);

            var countryData = new Array();
            countryData.push(countries);
            countryData.push(countriesQ);

            var storesData = new Array();
            storesData.push(stores);
            storesData.push(storesQ);

            var data = google.visualization.arrayToDataTable(publisherData);

            this.publishersChart = new Backbone.GoogleChart({
                chartType: 'ColumnChart',
                dataTable: data
            });

            data = google.visualization.arrayToDataTable(countryData);

            this.countriesChart = new Backbone.GoogleChart({
                chartType: 'ColumnChart',
                dataTable: data
            });

            data = google.visualization.arrayToDataTable(storesData);

            this.storesChart = new Backbone.GoogleChart({
                chartType: 'ColumnChart',
                dataTable: data
            });

            this.on('post-render', this.onPostRender, this);
        },

        //Renders the item
        render: function () {
            this.$el.html(this.template());
            //this.publishersChart.dataTable.push(this.publishers);
            //this.publishersChart.dataTable.push(this.publishersQ);
            this.$("#publishers").append( this.publishersChart.render().el );
            this.$("#country").append( this.countriesChart.render().el );
            this.$("#store").append( this.storesChart.render().el );
            this.trigger('post-render');
            return this;
        },



        onPostRender: function () {
            $(this.el).foundation();
        }

    });

    return StatsView;
});



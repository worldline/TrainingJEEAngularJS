(function () {
    "use strict";

    var app = angular.module('app');

    /** Products catalog service. */
    var CatalogService = function (http) {

        /** Returns all products. Uses the JSON file */
        this.getCatalog = function () {
            return http.get('api/app/catalog');
        };

        this.getProduct = function (pId) {
            return http.get('api/app/catalog/' + pId);
        };
    };

    app.factory('catalogService', ['$http', function ($http) {
        return new CatalogService($http);
    }]);
})();
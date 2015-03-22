(function () {
    "use strict";

    /** Catalog view controller */
    angular.module('app')
        .controller('CatalogController', ['$scope', '$location', 'catalogService', function ($scope, $location, catalogService) {

            /** Returns all products. */
            catalogService.getCatalog().success(function (result) {
                $scope.products = result;
            });
        }]);
})();
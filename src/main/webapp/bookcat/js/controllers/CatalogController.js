(function () {
    "use strict";

    /** Catalog view controller */
    angular.module('app')
        .controller('CatalogController', ['$scope', '$location', 'catalogService', 'ProductUtils', 'UserService', function ($scope, $location, catalogService, ProductUtils, UserService) {

            /** Returns all products. */
            catalogService.getCatalog().success(function (result) {
                $scope.products = result;
            });
                 
            $scope.nbResults= 5;
            
        }]);
})();
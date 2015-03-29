(function () {
    "use strict";

    /** Catalog view controller */
    angular.module('app')
        .controller('CatalogController', ['$scope', '$location', 'catalogService', 'ProductUtils', 'UserService', function ($scope, $location, catalogService, ProductUtils, UserService) {

            /** Returns all products. */
            catalogService.getCatalog().success(function (result) {
                $scope.products = result;
            });
            
            $scope.getRatingClass = ProductUtils.getRatingCss;

            $scope.getImage = ProductUtils.getImage;

            $scope.addToCart = function(pItem){
                 UserService.addToCart(pItem,1);
                 $location.path('/basket');
            };
            
            
        }]);
})();
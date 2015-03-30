(function(){
    "use strict";


    angular.module('app').directive('productSummary', ['ProductUtils', function (ProductUtils) {

        return {
            restrict: 'E',
            templateUrl: 'bookcat/templates/partials/productSummary.html',
            scope:{
                product:'='
            },
            link: function (scope, element, attrs) {
                scope.getRatingClass = ProductUtils.getRatingCss;
            },

            controller: ['$scope','$location',
                'UserService',
                function ($scope,$location,UserService) {

                    $scope.addToCart = function (pItem) {
                        UserService.addToCart(pItem, 1);
                         $location.path('/basket');
                    };
                }]
        }

    }]);
})();
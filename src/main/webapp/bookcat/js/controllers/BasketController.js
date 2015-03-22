(function () {
    "use strict";

    /** Basket view controller */
    angular.module('app')
        .controller('BasketController', ['$scope', function ($scope) {
            $scope.items = [];//todo
            $scope.nbItem = 0; //todo
            $scope.getTotal = function () {
                var total = 0;
                for(var index = 0 ; index < $scope.items.length ; index++){
                    total += $scope.items[index].qty * $scope.items[index].price;
                }
                return total;
            };
        }]);
})();
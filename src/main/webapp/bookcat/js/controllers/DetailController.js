(function () {
    "use strict";

    /** Product detail view controller */
    angular.module('app')
        .controller('DetailController', ['$scope', '$location', '$routeParams', 'catalogService',
            function ($scope, $location, $routeParams, catalogService) {

            $scope.product = {};

            catalogService.getProduct($routeParams.id).success(function (result) {
                $scope.product = result;
            });

            $scope.quantity = 1;


		    /** Returns rating for a given product. */
		    var getProductRating = function(comments) {
		        if (comments) {
		            var sumRatings = 0;
		            for ( var index = 0; index < comments.length; index++) {
		                var comment = comments[index];
		                sumRatings += comment.rate;
		            }
		            return (sumRatings / comments.length |0);  // like Math... but better :)
		        }
		        return 0;
		    };


}]);
})();
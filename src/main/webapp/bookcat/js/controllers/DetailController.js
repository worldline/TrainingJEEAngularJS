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
		    
		    $scope.getImage = function (id) {
		        if (!id) {
		            return "";
		        } else {
		            return "/bookcat/img/catalog/" + id + ".jpg";
		        }
		    };
		    
		    /** Returns the CSS class for the average rating of a given product. */
		    $scope.getCSSRating = function(pItem) {
		        var css = ['rating'];

		        if (pItem !== undefined) {
		            switch (getProductRating(pItem)) {
		                case 1:
		                    css.push('one');
		                    break;
		                case 2:
		                    css.push('two');
		                    break;
		                case 3:
		                    css.push('three');
		                    break;
		                case 4:
		                    css.push('four');
		                    break;
		                case 5:
		                    css.push('five');
		                    break;
		                default :
		                    css.push('zero');
		            }
		        }
		        return css;
		    };


}]);
})();
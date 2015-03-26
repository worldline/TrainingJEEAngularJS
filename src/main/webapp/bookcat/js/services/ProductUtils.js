(function(){
    "use strict";

    /** Products utility service */
    var ProductUtils = function() {

        /** Returns rating for a given product. */
        var getProductRating = function(comments) {
            if (comments) {
                var sumRatings = 0;
                for ( var index = 0; index < comments.length; index++) {
                    var comment = comments[index];
                    sumRatings += comment.rate;
                }
                return Math.floor(sumRatings / comments.length);
            }
            return 0;
        };

        /** Returns the CSS class for the average rating of a given product. */
        this.getRatingCss = function(pItem) {
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
    };

    angular.module('app')
        .value('ProductUtils', new ProductUtils());
})();
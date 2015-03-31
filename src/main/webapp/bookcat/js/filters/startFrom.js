(function(){
    "use strict";
    /** Filter used to return a collection which only elements at or after a given index. */
    angular.module('app')
    .filter('startFrom', function() {
        return function(pArray, pStartIndex) {
            if (pArray !== undefined && pArray !== null) {
                var filteredArray = [];
                filteredArray = pArray.slice(pStartIndex);
                return filteredArray;
            }
            return pArray;
        };
    });
})();

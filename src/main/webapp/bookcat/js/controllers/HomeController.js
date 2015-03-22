(function () {
    "use strict";

    /** Home view controller */
    angular.module('app')
        .controller('HomeController', ['$scope', function ($scope) {

            $scope.message = "Welcome in our shop!!!";

        }]);
})();
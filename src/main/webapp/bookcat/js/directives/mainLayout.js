(function () {
    "use strict";

    var app = angular.module('app');

    /** Layout directive controller */
    var LayoutController = function ($scope, $cookies, $rootScope, $location, $route) {

        /** TODO: Gets registered user from cookies. */

        /** TODO: User access check */

        /** Logout function */
        $scope.logout = function () {
            // TODO
        };
    };

    /** Layout directive. Wraps every view in the application. */
    app.directive('mainLayout', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: "templates/partials/mainLayout.html",
            controller: [
                '$scope', '$cookies', '$rootScope', '$location', '$route',
                function ($scope, $cookies, $rootScope, $location, $route) {
                    return new LayoutController($scope, $cookies, $rootScope, $location, $route);
                }]
        };
    });
})();

(function () {
    "use strict";

    /** Profile view controller */
    angular.module('app')
    	.controller('ProfileController', ['$scope', '$log', 'Session','AuthenticationSharedService',
        function ($scope, $log, Session, AuthenticationSharedService )
        {
    	            
    	 	$scope.logout = function() {
                AuthenticationSharedService.logout();
            };
         
        }]); 
})();
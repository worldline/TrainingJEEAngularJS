var httpHeaders;
var baseUrl;
(function () {
    "use strict";

    var app = angular.module('app', [ 'ngCookies', 'ngRoute', 'ngResource', 'ui.bootstrap', 'pascalprecht.translate']);

    /** Services configuration */
    app.config(
        [
            '$routeProvider',
            '$locationProvider',
            '$httpProvider',
            '$translateProvider',
            'USER_ROLES',
            function ($routeProvider, $locationProvider, $httpProvider, $translateProvider, USER_ROLES) {
                $locationProvider.html5Mode(false);

                baseUrl = "bookcat/";
                
                $routeProvider.when('/', {
                    templateUrl: baseUrl + 'templates/views/home.html',
                    controller: 'HomeController',
                    access: {authorizedRoles: [USER_ROLES.all]}
                }).when('/login', {
                    templateUrl: baseUrl + 'templates/views/login.html',
                    controller: 'LoginController',
                     access: {authorizedRoles: [USER_ROLES.all]}
                }).when('/books', {
                    templateUrl: baseUrl + 'templates/views/catalog.html',
                    controller: 'CatalogController',
                     access: {authorizedRoles: [USER_ROLES.all]}
                }).when('/book/:id', {
                    templateUrl: baseUrl + 'templates/views/detail.html',
                    controller: 'DetailController',
                    access: {authorizedRoles: [USER_ROLES.all]}
                }).when('/basket', {
                    templateUrl: baseUrl + 'templates/views/basket.html',
                    controller: 'BasketController',
                    access: {authorizedRoles: [USER_ROLES.all]}
                }).when('/profile', {
                    templateUrl: baseUrl + 'templates/views/profile.html',
                    controller: 'ProfileController',
                    access: {authorizedRoles: [USER_ROLES.all]}
                }).when('/404', {
                    templateUrl: baseUrl + 'templates/views/404.html',
                    access: {authorizedRoles: [USER_ROLES.all]}
                }).otherwise({
                    redirectTo: '/404',
                    access: {authorizedRoles: [USER_ROLES.all]}
                });

                $translateProvider.translations('en', {
                    "_Slogan": "All the books you need, at the highest price!",
                    "_Basket_Items_": "item(s) in your basket",
                    "_Logout_": "Logout",
                    "_Sign_In_": "Sign-in"
                });
                $translateProvider.translations('fr', {
                    "_Slogan": "All the books you need, at the highest price!",
                    "_Basket_Items_": "item(s) in your basket",
                    "_Logout_": "Logout",
                    "_Sign_In_": "Sign-in"
                });
                
                httpHeaders = $httpProvider.defaults.headers;
                
                // We need a interceptor to catch error message 
                $httpProvider.interceptors.push(function($rootScope,$q){
                //see http://www.webdeveasy.com/interceptors-in-angularjs-and-useful-examples/
                //see http://onehungrymind.com/winning-http-interceptors-angularjs/
                return {
                    request : function(config) {
                        return config;
                    },

                    response: function (response) {
                        if (response.status === 403 || response.status === 401) {
                            // insert code to redirect to custom unauthorized page

                        }
                        return response || $q.when(response);
                    },

                    responseError : function(response) {
                        if(response.status ===undefined) {
                            //watch out error message could be parse error message from ngresource
                            $rootScope.$broadcast('responseError',response.message);
                        };
                        if (response.status === 401) {
                            $rootScope.$broadcast('unauthorized');
                        }
                        return $q.reject(response);
                    }
            }});
            }
        ]).run(['$rootScope', '$location', '$http', 'AuthenticationSharedService',  'Session', 'USER_ROLES',
                function run( $rootScope, $location, $http, AuthenticationSharedService,  Session, USER_ROLES){
        
       $rootScope.$on('$routeChangeStart', function (event, next) {
            $rootScope.isAuthorized = AuthenticationSharedService.isAuthorized;
            $rootScope.userRoles = USER_ROLES;
            if( next.acess!= undefined && !$rootScope.isAuthorized( next.access.authorizedRoles) )
            {
                $location.path('/login');
            }

        });

        // Call when the 401 response is returned by the server
        $rootScope.$on('unauthorized', function() {
           $location.path('/login');
        });

       
        
        
        
    }]);
})();
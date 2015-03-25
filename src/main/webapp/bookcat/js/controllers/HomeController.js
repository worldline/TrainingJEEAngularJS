(function () {
    "use strict";

    /** Home view controller */
    angular.module('app')
        .controller('HomeController', ['$scope','NewsService', function ($scope,NewsService) {

            $scope.message = "Welcome in our shop!!!";


            /** Gets all the news. */
            $scope.lstNews = NewsService.query();

            /** Gets the news with id = 1. */
            $scope.currentNews = NewsService.get({ id: 1 });
            $scope.newsOfTheDay = NewsService.random();

            /** Creates a new news. */
            $scope.addedNews = new NewsService();

            /** Increments the number of likes of a news, and saves the changes. */
            $scope.addLike = function(news) {
                news.$like();
            };

            /** Deletes a news. */
            $scope.deleteNews = function(news) {
                news.$delete(function(){
                    $scope.lstNews.splice($scope.lstNews.indexOf(news),1);
                });

            };

            /** Adds a news. */
            $scope.addNews = function() {
                $scope.addedNews.$save(function(){
                    $scope.lstNews.push($scope.addedNews);
                    $scope.addedNews = new NewsService();
                });

            };
        }]);
})();
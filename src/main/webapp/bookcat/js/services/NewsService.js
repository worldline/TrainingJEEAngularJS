(function(){
    "use strict";
    angular.module('app')
        .factory('NewsService',['$resource', function ($resource) {
            return $resource('/api/app/news/:op/:id',{id:'@id'},{
            like: {method:'GET',params: {op:'like'}},
            random: {method:'GET',params:{op:'random'}}
                });
        }]);
})();
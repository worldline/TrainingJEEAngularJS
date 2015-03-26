describe("Detail Controller",function(){

    var scope, ctrl, $httpBackend, catalogService,
    	validate = function(){
        return { "message" : "not Authenticated"  }
    	},
        book1 =function(){
            return {
                "id": 1,
                "name": "AngularJS",
                "author": "Brad Green, Shyam Seshadri",
                "price": 15.34,
                "description": "Description...",
                "category": "book",
                "isNew": false,
                "comments": [
                    {
                        "rate": 3,
                        "user": "Test Reader",
                        "comment": "Test comment"
                    }
                ]

            }
        };

    //load our app module
    beforeEach(module('app'));

    // $httpBackend is in module ngMock (angular-mock.js)
    // inject() is used to inject services in our function. (ignores leading and trailing underscores)
    beforeEach(inject(function($rootScope, $controller, _$httpBackend_,$routeParams) {
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        $routeParams.id = 1;

        $httpBackend.when('GET', 'api/app/user/validate')
        .respond(book1());
        
        $httpBackend.when('GET', 'api/app/catalog/1')
            .respond(book1());

        ctrl = $controller('DetailController',{$scope: scope});
    }));

    it('should fetch one book', function() {
        expect(scope.product).toEqual({});
        $httpBackend.flush();
        expect(scope.product).toEqual(book1());
    });

    it('getImage() should return the correct url', function() {
        // toMatch: compare a string/regular expression.
        expect(scope.getImage(1)).toEqual('/bookcat/img/catalog/1.jpg');
    });

    it('getCSSRating() should return the correct css classes', function() {
        expect(scope.getCSSRating(book1().comments)).toEqual(['rating','three']);
    });
});

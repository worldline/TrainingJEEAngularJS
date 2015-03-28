describe("ProductUtils Service", function () {
	  var ProductUtils,
      comments = [
          {
              "rate": 2,
              "user": "Regis Legrand",
              "comment": "Test comment"
          },
          {
              "rate": 4,
              "user": "François Facon",
              "comment": "My comment"
          }
      ];

	  beforeEach(function () {
	
	      module('app');
	      inject(function ($injector) {
	          ProductUtils = $injector.get('ProductUtils');
	      });
	  });
	
	  it("getRatingCss should return the correct CSS classes as an array", function () {
	      expect(ProductUtils.getRatingCss(comments)).toEqual(['rating','three']);
	  });
});
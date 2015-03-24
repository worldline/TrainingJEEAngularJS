describe("Detail Book Page", function () {

    beforeEach(function(){
        browser.get('http://localhost:8080/bookcat#/book/1');
    });

    it("Check Book Name", function () {
        expect(element(by.binding('product.name')).getText()).toEqual('ANGULARJS');
    });

    it('The price change when updating quantity', function () {
        expect(element(by.binding('product.price * quantity |currency')).getText()).toEqual('$15.34');
        var qty = element(by.model('quantity'));
        qty.clear();
        /*browser.debugger();*/
        qty.sendKeys(2);
        expect(element(by.binding('product.price * quantity |currency')).getText()).toEqual('$30.68');
    });



    it('The image url is correct', function () {
        browser.debugger();
        expect(element(by.css('.photo')).getAttribute('src')).toEqual('http://localhost:8080/bookcat/img/catalog/1.jpg');
    });

});
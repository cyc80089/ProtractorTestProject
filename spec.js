describe('Test User Registration', function() {
    beforeEach(function() {
        browser.get('http://localhost:8080/#!/register');
    });

var randVal = Date.now()

    it('user registration success', function(){
        element(by.model('vm.user.firstName')).sendKeys('firstname' + randVal);
        element(by.model('vm.user.lastName')).sendKeys('lastname' + randVal);
        element(by.model('vm.user.username')).sendKeys('test123');
        element(by.model('vm.user.password')).sendKeys('123456');

        element(by.className('btn btn-primary')).click();

        browser.getCurrentUrl().then(function(url) {
            expect(url).toEqual('http://localhost:8080/#!/login');     
        });

	element(by.model('vm.username')).sendKeys('test123');
        element(by.model('vm.password')).sendKeys('123456');

        element(by.className('btn btn-primary')).click();

        browser.getCurrentUrl().then(function(url) {
            expect(url).toEqual('http://localhost:8080/#!/');     
        });

        element(by.className('btn btn-primary')).click();

	 browser.getCurrentUrl().then(function(url) {
            expect(url).toEqual('http://localhost:8080/#!/login');     
        });

    });

});



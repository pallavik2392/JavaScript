describe("my suite",function(){
    it("my test",function(){
        browser.get('https://angularjs.org/');
        browser.sleep(5000);
        browser.manage().window().maximize();
        //expect(browser.getCurrentUrl())toBe('https://angularjs.org/');
    })
})
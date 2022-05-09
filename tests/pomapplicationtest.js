let applicationpage = require('../pages/applicationpage')


describe("filter suite",function(){

    it("filter search",function(){

    browser.ignoreSynchronization=true;
    applicationpage.get("https://staging-alis.wemotive.in/");
    browser.sleep(3000);
    browser.manage().window().maximize();
    browser.sleep(3000);
    element(by.name('username')).sendKeys("sa@mailinator.com");
    browser.sleep(3000);
    element(by.id('password')).sendKeys("User123!");
    browser.sleep(3000);
    element(by.css("button[type=submit]")).click();
    browser.sleep(3000);
    element(by.xpath("//a[normalize-space()='Applications']")).click();

    applicationpage.setstatusfilter("Applied");
    browser.sleep(2000);

    applicationpage.setcoursefilter("Testing");
    browser.sleep(2000);

    applicationpage.setconselorfilter("Sameer");
    browser.sleep(2000);

    })
})
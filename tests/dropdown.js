const { browser } = require('protractor');
let applicationpage = require('../pages/applicationpage')
let signinpage=require('../pages/signinpage')

describe("select value", function(){

    beforeAll(function()
    {
        
    browser.ignoreSynchronization=true;
    browser.get(browser.params.url);
    browser.sleep(3000);
    browser.manage().window().maximize();
    browser.sleep(3000);
    signinpage.setusername(browser.params.usercred);
    browser.sleep(3000);
    signinpage.setpassword(browser.params.passcred);
    browser.sleep(3000);
    signinpage.clicksubmit();
    browser.sleep(3000);
    })

    it("value",function(){
        applicationpage.selectapplicationTab();
        browser.sleep(13000);
     applicationpage.setrowvalue("10");
     browser.sleep(3000);
    })
})
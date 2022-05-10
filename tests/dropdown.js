//const { browser } = require('protractor');
let applicationpage = require('../pages/applicationpage')
let signinpage=require('../pages/signinpage')
let leadpage=require('../pages/leadpage');
const { browser } = require('protractor');

describe("select value", function(){

    browser.ignoreSynchronization=true;
    browser.waitForAngularEnabled(false);


        
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
    

    it("value dropdown",function(){
        
        leadpage.clicknewlead();
        browser.sleep(3000);

        browser.waitForAngularEnabled(false);

        //var dropdown = element(by.xpath("//input[@id='gender']"));

        this.setGender=function(genderName){
            var opt;
            if (opt=="Female"){
            opt= leadgender1.all(by.css('gender-option-0'));
            opt.click();
            }
            browser.sleep(3000);
            else if(opt=="Male"){
                opt= leadgender1.all(by.css('gender-option-1'));
                opt.click();
                  }
                  browser.sleep(3000);

            else {
                opt= leadgender1.all(by.css('gender-option-2'));
                opt.click();

            }      
            browser.sleep(3000);

        }

        

    })
})

let leadpage = require('../pages/leadpage')
let signinpage= require('../pages/signinpage')
//let dataRequired=require('../pages/dataRequired')

describe("my suite",function(){

    it("add lead",function(){ 
        
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
   
    leadpage.clicknewlead();
    browser.sleep(3000);

    leadpage.setfName(browser.params.firstnameLead);
    browser.sleep(2000);
    leadpage.setmName(browser.params.middlenameLead);
    browser.sleep(2000);
    leadpage.setlName(browser.params.lastnameLead);
    browser.sleep(2000);
    leadpage.setEmail(browser.params.emailLead);
    browser.sleep(2000);
    leadpage.setPhone(browser.params.phnumber1);
    browser.sleep(2000);
    leadpage.setAlternatePhone(browser.params.phnumber2);
    browser.sleep(2000);
    leadpage.setwhatsapp(browser.params.mobNumber);
    browser.sleep(2000);
    leadpage.setGender(browser.params.genderName);
    browser.sleep(2000);
    leadpage.setDOB("07/04/1992");
    browser.sleep(2000);
    leadpage.setOccupation(browser.params.occupation);
    browser.sleep(2000);
    leadpage.setCommLangauge("English");
    browser.sleep(2000);
    leadpage.setConselor("Sameer");
    browser.sleep(2000);
    leadpage.setCourse("Testing");
    browser.sleep(2000);
    leadpage.setLocation("K11 Pune");
    browser.sleep(2000);
    leadpage.setLangauge("English");
    browser.sleep(2000);
    leadpage.setCountry("India");
    browser.sleep(2000);
    leadpage.setPostalcode(browser.params.pincode);
    browser.sleep(2000);
    leadpage.setAddress1(browser.params.addresstext1);
    leadpage.setAddress2(browser.params.addresstext2);
    browser.sleep(2000);
    leadpage.setLandmark(browser.params.Land);
    browser.sleep(2000);
    leadpage.clickSave();

    browser.sleep(2000);
})

})
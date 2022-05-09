
let leadpage = require('../pages/leadpage')
let signinpage= require('../pages/signinpage')

describe("my suite",function(){

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

it("add lead",function(){ 

   
    leadpage.clicknewlead();
    browser.sleep(3000);

    leadpage.setfName(browser.params.fname);
    browser.sleep(2000);
    leadpage.setmName(browser.params.mname);
    browser.sleep(2000);
    leadpage.setlName(browser.params.lname);
    browser.sleep(2000);
    leadpage.setEmail(browser.params.email);
    browser.sleep(2000);
    leadpage.setPhone(browser.params.phoneNumber1);
    browser.sleep(2000);
    leadpage.setAlternatePhone(browser.params.phoneNumber2);
    browser.sleep(2000);
    leadpage.setwhatsapp(browser.params.mobile);
    browser.sleep(2000);
    leadpage.setGender(browser.params.gendName);
    browser.sleep(2000);
    leadpage.setDOB("07/04/1992");
    browser.sleep(2000);
    leadpage.setOccupation(browser.params.Occup);
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
    leadpage.setPostalcode(browser.params.code);
    browser.sleep(2000);
    leadpage.setAddress1(browser.params.addresstext1);
    leadpage.setAddress2(browser.params.addresstext2);
    browser.sleep(2000);
    leadpage.setLandmark(browser.params.land);
    browser.sleep(2000);
    leadpage.clickSave();

    browser.sleep(2000);
})

})
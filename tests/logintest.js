let signinpage = require('../pages/signinpage')

describe("mysuite",function(){
it("validate login", function(){
  browser.ignoreSynchronization=true;
  //browser.waitForAngularEnabled=true;
  browser.waitForAngularEnabled(false);
  

  browser.get(browser.params.url);
  browser.sleep(3000);
  browser.manage().window().maximize();
  browser.sleep(3000);
  browser.ignoreSynchronization=true;

  signinpage.setusername(browser.params.usercred);
  browser.sleep(3000);
  signinpage.setpassword(browser.params.passcred);
browser.sleep(3000);
signinpage.clicksubmit();
browser.sleep(6000);
})


})
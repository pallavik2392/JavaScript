let signinpage=function(){

    let username=element(by.xpath("//input[@id='username']"));
    let password=element(by.xpath("//input[@Id='password']"));
    let signin=element(by.css("button[type=submit]"));

    this.setusername=function(usercred){
        username.sendKeys(usercred);
    }

    this.setpassword=function(passcred){
        password.sendKeys(passcred);
    }

    this.clicksubmit=function(){
        signin.click();
    }
};

module.exports = new signinpage();

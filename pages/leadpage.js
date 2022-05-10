let leadpage=function(){

    let leadsearch=element(by.xpath("//input[@placeholder='Search']"));
    let leadcoursefilter=element(by.xpath("//button[normalize-space()='Course: All']"));
    let leadsamplecsv=element(by.xpath("//button[normalize-space()='Download sample CSV']"));
    let leadbulkimport=element(by.xpath("//button[normalize-space()='Bulk Import']"));
    let leadinvite=element(by.xpath("//button[normalize-space()='Invite Leads']"));
    let leadnewlead=element(by.xpath("//button[normalize-space()='New Lead']"));
    let leadfname=element(by.xpath("//input[@id='firstName']"));
    let leadmname=element(by.name("middleName"));
    let leadlname=element(by.name("lastName"));
    let leademail=element(by.name("email"));
    let leadphone=element(by.name("mobile"));
    let leadalterphone=element(by.name("alternateMobileNumber"));
    let leadwhatsappnumber=element(by.name("whatsappNumber"));
    let leaddrpgender=element(by.xpath("//input[@id='gender']"));
    let leaddob=element(by.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/form[1]/div[2]/div[10]/div[2]/div[1]/div[1]"));
    let leadoccup=element(by.name("occupation"));
    let leadcommlangauge=element(by.xpath("//input[@id='communicationLanguage']"));
    let leadprefertime=element(by.css("button[aria-label=Add preffered calling slot]"));
    let leadconselor=element(by.xpath("//input[@id='counselor']"));
    let leadcourse=element(by.xpath("//input[@id='course']"));
    let leadlocation=element(by.id("schoolLocation"));
    let leadlangauge=element(by.xpath("//input[@id='courseLanguage']"));
    let leadcountry=element(by.id("country"));
    let leadpostal=element(by.id("postalCode"));
    let leadaddress1=element(by.id("addressLine1"));
    let leadaddress2=element(by.id("addressLine2"));
    let leadlandmark=element(by.id("landmark"));
    let leadsave=element(by.css("button[type=submit]"));
    let leadaddress=element(by.css("button[tabindex=0]"));


    this.get=function(url)
    {
        browser.get(url);
    }

    this.setfName=function(firstnameLead){
        leadfname.sendKeys(firstnameLead);
    }

    this.setmName=function(middlenameLead){
        leadmname.sendKeys(middlenameLead);
    }

    this.setlName=function(lastnameLead){
        leadlname.sendKeys(lastnameLead);
    }

    this.setEmail=function(emailLead){
        leademail.sendKeys(emailLead);
    }

    this.setPhone=function(phnumber1){
        leadphone.sendKeys(phnumber1);
    }

    this.setAlternatePhone=function(phnumber2){
        leadalterphone.sendKeys(phnumber2);
    }

    this.setwhatsapp=function(mobNumber){
        leadwhatsappnumber.sendKeys(mobNumber);
    }


   // this.setGender=function(){
    //element.all(leaddrpgender).each(function (eachElement, index) 
   // {
    //   eachElement.click();// select the <select>
    //   browser.driver.sleep(500);// wait for the renderings to take effect
    //   element(by.css('Male')).click();// select the first md-option
    //   browser.driver.sleep(500);// wait for the renderings to take effect
  // })
//}

    this.setGender=function(genderName){
        leadgender1=leaddrpgender.element(by.xpath("//div[@class='MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-12v822k']")).click();
        leadgender1.element(by.xpath("//li[@id='gender-option-0']")).click();
        ;    
    }

    this.setDOB=function(date){
      leaddob1=leaddob.element(by.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/form[1]/div[2]/div[10]/div[2]/div[1]/div[1]/input[1]")).click();
      leaddob2=leaddob1.element(by.xpath("(//body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[2]/button[1])[//body/div[2]/div[3]/div[1]/div[2]/button[2]]")).click();    
      leaddob2.element(by.xpath("//body/div[2]/div[3]/div[1]/div[2]/button[2]")).click();
    }
    
      this.setOccupation=function(occupation){
        leadoccup.sendKeys(occupation);
    }

    this.setCommLangauge=function(lang){
        leadcommlangauge1=leadcommlangauge.element(by.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/form[1]/div[2]/div[14]/div[2]/div[1]/div[1]/div[1]//input[@id='communicationLanguage']")).click();
        leadcommlangauge1.element(by.xpath("//div[@id='communicationLanguage-option-0']")).click();    
    }

   // this.setPrefertime=function(time){
     //   leadoccup.sendKeys(Occup);
    //}

    this.setConselor=function(consName){
        leadconselor1=leadconselor.element(by.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/form[1]/div[2]/div[18]/div[2]/div[1]/div[1]/div[1]//input[@id='counselor']")).click();
        leadconselor1.element(by.xpath("//div[@id='counselor-option-1']")).click();
    }

    this.setCourse=function(courseName){
        leadcourse1=leadcourse.element(by.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/form[1]/div[2]/div[19]/div[2]/div[1]/div[1]/div[1]//input[@id='course']")).click();
        leadcourse1.element(by.xpath("//div[@id='course-option-2']")).click();
    }

    this.setLocation=function(locName){
        leadlocation1=leadlocation.element(by.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/form[1]/div[2]/div[20]/div[2]/div[1]/div[1]/div[1]//input[@id='schoolLocation']")).click();
        leadlocation1.element(by.xpath("//div[@id='schoolLocation-option-1']")).click();
    }

    this.setLangauge=function(langName){
        leadlangauge1=leadlangauge.element(by.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/form[1]/div[2]/div[21]/div[2]/div[1]/div[1]/div[1]//input[@id='courseLanguage']")).click();
        leadlangauge1.element(by.xpath("//div[@id='courseLanguage-option-0']")).click();
    }

    this.setCountry=function(countryName){
        leadcountry1=leadcountry.element(by.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/form[1]/div[2]/div[24]/div[2]/div[1]/div[1]/div[1]//input[@id='country']")).click();
        leadcountry1.element(by.xpath("//div[@id='country-option-0']")).click();
    }

    this.setPostalcode=function(pincode){
        leadpostal.sendKeys(pincode);
    }

    this.setAddress1=function(addresstext1){
        leadaddress1.sendKeys(addresstext1);
    }

    this.setAddress2=function(addresstext2){
        leadaddress2.sendKeys(addresstext2);
    }

    this.setLandmark=function(Land){
        leadlandmark.sendKeys(Land);
    }

    this.clickSave=function(){
        leadsave.click();
    }

    this.clicksearch=function(){
        leadsearch.click();
    }

    this.setcoursefilter=function(corName){
        leadcoursefilter1=leadcoursefilter.click();
        leadcoursefilter1.element("//input[@name='searchQuery']").sendKeys(corName);
    }

    this.downloadsamplecsv=function(){
        leadsamplecsv.click();
    }

    this.uploadbulkimport=function(){
        leadbulkimport.click();
    }

    this.leadinvitation=function(){
        leadinvite.click();
    }

    this.clicknewlead=function(){
        leadnewlead.click();
    }

};

module.exports = new leadpage();
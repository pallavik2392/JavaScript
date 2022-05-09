let applicationpage=function(){

    let applicationtab=element(by.xpath("//a[normalize-space()='Applications']"));
    let applicationsearch=element(by.xpath("//input[@placeholder='Search']"));
    let applicationstatusfilter=element(by.xpath("//button[normalize-space()='Status: All']"));
    let applicationcoursefilter=element(by.xpath("//button[normalize-space()='Courses: All']"));
    let applicationconselorfilter=element(by.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/button[1]"));
    let viewelement1=element(by.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[6]/span[1]/button[1]/i[1]"));
    let viewelement2=element(by.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[6]/span[1]/button[1]/i[1]"));
    let viewelement3=element(by.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[3]/td[6]/span[1]/button[1]/i[1]"));
    let viewelement4=element(by.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[4]/td[6]/span[1]/button[1]/i[1]"));
    let viewelement5=element(by.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[5]/td[6]/span[1]/button[1]/i[1]"));
    let viewelement6=element(by.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[6]/td[6]/span[1]/button[1]/i[1]"));
    let viewelement7=element(by.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[7]/td[6]/span[1]/button[1]/i[1]"));
    let viewelement8=element(by.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[8]/td[6]/span[1]/button[1]/i[1]"));
    let viewelement9=element(by.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[9]/td[6]/span[1]/button[1]/i[1]"));
    let viewelement10=element(by.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[10]/td[6]/span[1]/button[1]/i[1]"));
    let nextpage=element(by.xpath("//button[@aria-label='next page']//*[name()='svg']"));
    let rowvalue=element(by.xpath("//div[@id='mui-105926053']"));



    this.get=function(url)
    {
        browser.get(url);
    }

    this.selectapplicationTab=function(){
        applicationtab.click();
    }

    this.setsearch=function(byname){
        applicationsearch.sendKeys(byname);
    }

    this.setstatusfilter=function(bystatus){
        applicationstatusfilter1=applicationstatusfilter.click();
        app2=applicationstatusfilter1.element(by.xpath("//input[@name='searchQuery']")).sendKeys(bystatus);
        app3=app2.element(by.xpath("//input[@name='INITIALIZED']")).click();
        app3.element(by.xpath("//button[normalize-space()='Apply']")).click();
    }

    this.setcoursefilter=function(bycourse){
        applicationcoursefilter1=applicationcoursefilter.click();
        appl2=applicationcoursefilter1.element(by.xpath("//input[@name='searchQuery']")).sendKeys(bycourse);
        appl3=appl2.element(by.xpath("//input[@name='7733dfa7f45ea661d07237fc01234395']")).click();
        appl3.element(by.xpath("//button[normalize-space()='Apply']")).click();
    }

    this.setconselorfilter=function(byconselor){
        applicationconselorfilter1=applicationconselorfilter.click();
        browser.sleep(2000);
        appla2=applicationconselorfilter1.element(by.xpath("//input[@name='searchQuery']")).sendKeys(byconselor);
        appla3=appla2.element(By.xpath("//input[@name='29a233c0-c780-11ec-ab77-8100c2aa7e35']")).click();
        appla3.element(by.xpath("//button[normalize-space()='Apply']")).click();
    }

    this.viewStudent1=function(){
      viewelement1.click();
    }

    this.viewStudent2=function(){
        viewelement2.click();
      }

      this.viewStudent3=function(){
        viewelement3.click();
      }

      this.viewStudent4=function(){
        viewelement4.click();
      }

      this.viewStudent5=function(){
        viewelement5.click();
      }

      this.viewStudent6=function(){
        viewelement6.click();
      }
     
      this.viewStudent7=function(){
        viewelement7.click();
      }

      this.viewStudent8=function(){
        viewelement8.click();
      }

      this.viewStudent9=function(){
        viewelement9.click();
      }

      this.viewStudent10=function(){
        viewelement10.click();
      }
      
      this.movenextpage=function(){
          nextpage.click();

      }

      this.setrowvalue=function(number){
          rowvalue1=rowvalue.click();
          rowvalue1.element(by.xpath("//li[@data-value='25']"));
      }
      
};

module.exports = new applicationpage();
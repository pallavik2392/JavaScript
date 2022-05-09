
//const { browser } = require('protractor');
//const { browser } = require('protractor');
//const { browser } = require('protractor');
var xcelTojson = require('../tests/xcelTojson');
//an example configuration file
exports.config = {
directConnect: true,

//capabilities to be passed to the webdriver instance
capabilities: {
   'browserName': 'chrome'
},

//onPrepare: function(){
   
   //browser.manage().window().maximize();
   
   //browser.driver.get('https://staging-alis.wemotive.in/');
  //browser.get(xcelTojson.testConfig.url);
   //browser.get(result.logincred[0].B);
   //console.log('test1.......................',xcelTojson.testConfig.url);
  // browser.get(xcelTojson.testConfig.usercred);
   //console.log(xcelTojson.testConfig.result.usercred);

   //browser.get(xcelTojson.testConfig.passcred);
   //console.log(xcelTojson.testConfig.result.userpasscred);

//},

//framework to use  jasmine is recommended
framework: 'jasmine',

//spec pattern relative to the current working directory when protractor is called
specs:['..//tests//logintest.js'],


params:
{
   //url:'https://staging-alis.wemotive.in/',
   url: xcelTojson.testConfig.url,
   //usercred:'sa@mailinator.com',
   usercred: xcelTojson.testConfig.usercred,
   //passcred:'User123!',
   passcred: xcelTojson.testConfig.passcred,
   fname:'hony',
   mname:'t',
   lname:'ok',
   email:'hony@mailinator.com',
   phoneNumber1:9665659967,
   phoneNumber2:8797565883,
   mobile:9845676653,
   gendName:'gender-option-1',
   Occup:'teacher',
   code:'415514',
   addresstext1:'temple',
   addresstext2:'school',
   land:'ghhjkl',
},

//options to be passed to jasmine
jasmineNodeOpts : {
 defaultTimeoutInterval :80000
},

};

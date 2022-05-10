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

onPrepare: async () => {
   
   await browser.waitForAngularEnabled(false);
  // await browser.get(xcelTojson.testConfig.phoneNumber1);

   
   //browser.driver.get('https://staging-alis.wemotive.in/');
  //browser.get(xcelTojson.testConfig.url);
   //browser.get(result.logincred[0].B);
   //console.log('test1.......................',xcelTojson.testConfig.url);
  // browser.get(xcelTojson.testConfig.usercred);
   //console.log(xcelTojson.testConfig.result.usercred);

   //browser.get(xcelTojson.testConfig.passcred);
   //console.log(xcelTojson.testConfig.result.userpasscred);

},

//framework to use  jasmine is recommended
framework: 'jasmine',

//spec pattern relative to the current working directory when protractor is called
specs:['..//tests//dropdown.js'],


params:
{ 
   
   //url:'https://staging-alis.wemotive.in/',
   url: xcelTojson.testConfig.url,
   //usercred:'sa@mailinator.com',
   usercred: xcelTojson.testConfig.usercred,
   //passcred:'User123!',
   passcred: xcelTojson.testConfig.passcred,
   //fname:'kony',
   firstnameLead: xcelTojson.testConfig.firstnameLead,
   //mname:'t',
   middlenameLead: xcelTojson.testConfig.middlenameLead,
   //lname:'ok',
   lastnameLead: xcelTojson.testConfig.lastnameLead,
   //email:'kony@mailinator.com',
   emailLead: xcelTojson.testConfig.emailLead,
  // phnumber1:9669659967,
  phnumber1:xcelTojson.testConfig.phnumber1,
   // phnumber2:8799565883,
    phnumber2:xcelTojson.testConfig.phnumber2, 
    //mobNumber:9845676659,
    mobNumber: xcelTojson.testConfig.mobNumber,
   //gendName:'gender-option-1',
   genderName: xcelTojson.testConfig.genderName,
   //Occup:'teacher',
   occupation: xcelTojson.testConfig.occupation,
   //code:'415514',
   pincode: xcelTojson.testConfig.pincode,
  // addresstext1:'temple',
  addresstext1: xcelTojson.testConfig.pincode,
  // addresstext2:'school',
  addresstext2: xcelTojson.testConfig.addresstext2,
  // land:'ghhjkl',
  Land: xcelTojson.testConfig.addresstext2,
},

//options to be passed to jasmine
jasmineNodeOpts : {
 defaultTimeoutInterval :80000
},

};

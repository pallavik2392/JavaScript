'use strict';

var fs=require('fs-extra');
const excelToJson = require('convert-excel-to-json');
//const { browser } = require('protractor');

const result = excelToJson({
    source: fs.readFileSync('credential.xls'),
    header: {
        // Is the number of rows that will be skepped and wiil not be present at our result object
        rows:1
    }

});
//browser.ignoreSynchronization=true;
console.log('xcel output::',result)

console.log('url',result.logincred[0].B)

console.log('usercred',result.logincred[1].B)

console.log('passcred',result.logincred[2].B)

var dataRequired = function(){
    //browser.ignoreSynchronization=true;

    this.testConfig={

        url:result.logincred[0].B,
        usercred:result.logincred[1].B,
        passcred:result.logincred[2].B,
    };
}

module.exports = new dataRequired();
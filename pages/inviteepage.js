let inviteepage=function(){


    let inviteesearch=element(by.xpath("//input[@placeholder='Search']"));

    this.setsearch=function(byinvitee){
        inviteesearch.sendKeys(byinvitee);
    }

};
module.exports = new inviteepage();
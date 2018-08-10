// this method are private only use for this module.
function logPass(msg){
    console.log('Message Form private method '+msg);
}

// Make this method public
function logMessage(msg){
    console.log('Message Form public method logMessage() :'+msg);
}

// Make this method public
function logDetails(msg){
    console.log('Message Form public method logDetails() :'+msg);
}

// When exports multiple property
module.exports.msg     = logMessage;
module.exports.details = logDetails;
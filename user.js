function user(name){
    console.log('Message from user module ' + name);
}

// When exports single property
module.exports = user;

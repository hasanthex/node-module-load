// make export object to constant
const logger_obj = require('./logger');
const user_obj   = require('./user');

// Calling logger module method.
logger_obj.details('From app');

// Calling user module method. 
user_obj('Muhammad Hasan');
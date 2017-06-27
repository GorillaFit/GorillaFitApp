const passport = require('passport');
LocalStrategy = require('passport-local').Strategy;
const Promise = require('bluebird');
const bcrypt = require('bcryptjs');
Promise.promisifyAll(bcrypt);

module.exports.isNewUser = (username, callback) => {
  //these are dummy functions to always return true
  callback(null, true);
}

module.exports.isExistingUser = (username, callback) => {
  //these are dummy functions to always return true
  callback(null, {hash: '$2a$10$cipR4w9YTfARaARv6NmohejFk/1OtO2YNHtYE0OywVrgQ.H51FqvS', id: 666});
}

module.exports.storeUserInDB = (username, hashedPassword, callback) => {
  //these are dummy functions to always return true
  callback(null, true);
}

module.exports.getNutritionHistory = (username, callback) => {
  callback(null, true);
}

Promise.promisifyAll(module.exports);




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
  callback(null, true);
}

module.exports.storeUserInDB = (username, hashedPassword, callback) => {
  //these are dummy functions to always return true
  callback(null, true);
}

module.exports.getNutritionHistory = (username, callback) => {
  callback(null, true);
}

Promise.promisifyAll(module.exports);

passport.use(new LocalStrategy(
  function(username, plainTextPassword, done) {
    console.log('this local thing is being called! ')
    module.exports.isExistingUserAsync(username)
    .then((user)=>{
      return bcrypt.compareAsync(plainTextPassword, user.hash);
    })
    .then(()=>{
      return bcrypt.getNutritionHistoryAsync(username);
    })
    .then((history)=>{
      return done(null, history);
    })
    .catch((err)=>{
      console.log('this is an error! ', err);
      return done(null, false, {message: 'this is an error'});
    })
  })
)



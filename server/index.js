var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var authUtils = require('./authUtils.js');
const Promise = require('bluebird');
const bcrypt = require('bcryptjs');
Promise.promisifyAll(bcrypt);
Promise.promisifyAll(authUtils);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.post('/signup', (req, res)=>{
  authUtils.isNewUserAsync(req.body.userName)
  .then(()=>{
    return bcrypt.genSaltAsync(10)
  })
  .then(salt=>{
    return bcrypt.hashAsync(req.body.password, salt)
  })
  .then(hashedPassword=>{
    return authUtils.storeUserInDBAsync(req.body.userName, hashedPassword) 
  })
  .then(user=>{
    res.status(201);
    res.end();
  })
  .catch((err)=>{
    res.status(404);
    res.end()
  })
})


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
      console.log('we are inside history!!!')
      return done(null, history);
    })
    .catch((err)=>{
      console.log('this is an error! ', err);
      return done(null, false, {message: 'this is an error'});
    })
  })
)

app.post('/login', passport.authenticate('local', 
  {successRedirect: '/success', failureRedirect: '/fail'},
  (req, res)=>{
    console.log('this is what req and res look like ', req, res)
}));

app.get('/foods', function (req, res) {
  var options = {
    method: 'POST',
    url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    headers: {
      'content-type': 'application/json',
      'x-app-key': '599e301928d15020ff16d7dbeef77f6f',
      'x-app-id': '9e058c76'
    },
    sort: {
      order: '_score'
    },
    //offset: 0,
    limit: 5,
    body: {
      query: req.query.userFood,
      timezone: 'US/Eastern'
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) {
      console.log('here in error');
      throw new Error(error);
    } else {
      res.status(200);
      console.log(body.foods);
      res.send(body.foods);
      res.end();
    }

  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`);
});
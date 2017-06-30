var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var authUtils = require('./authUtils.js');
const Promise = require('bluebird');
const bcrypt = require('bcryptjs');
const flash = require('connect-flash');
Promise.promisifyAll(bcrypt);
Promise.promisifyAll(authUtils);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../database/index.js');

Promise.promisifyAll(db);

var app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.post('/signup', (req, res)=>{
  db.isNewUserAsync(req.body.userName)
  .then(()=>{
    return bcrypt.genSaltAsync(10);
  })
  .then(salt=>{
    return bcrypt.hashAsync(req.body.password, salt);
  })
  .then(hashedPassword=>{
    console.log('this is a hashed password! ', hashedPassword);
    return db.insertUserAsync(req.body.userName, hashedPassword);
  })
  .then(user=>{
    res.status(201);
    res.end();
  })
  .catch((err)=>{
    console.log(err);
    res.status(404);
    res.end();
  });
});



app.post('/foods', (req, res)=>{
  console.log('this is the request body! ', req.body);
  res.status(201)
  res.end()
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.isExistingUserAsync(username)
    .then((user)=>{
      bcrypt.compareAsync(password, user[0].hash)
      .then(()=>{
        return db.getHealthHistoryAsync(username);
      })
      .then((history)=>{
        user[0].history = history;
        return done(null, user, history);
      });
    })
    .catch((err)=>{
      return done(null, false, {message: err});
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user[0].id);
});

passport.deserializeUser(function(id, done) {
  authUtils.getUserByID(id, function(err, user) {
    done(err, user);
  });
});

app.post('/login', passport.authenticate('local'), 
  ((req, res)=>{
    req.flash('info', 'Hi there!');
    res.status(201);
    res.json(req.user[0].history);
    res.end();
  })
);

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
      res.send(body.foods);
      res.end();
    }

  });
});

app.get('/exercise', function(req, res) {
  var options = {
    method: 'POST',
    url: 'https://trackapi.nutritionix.com/v2/natural/exercise',
    headers: {
      'content-type': 'application/json',
      'x-app-key': '599e301928d15020ff16d7dbeef77f6f',
      'x-app-id': '9e058c76'
    },
    body: {
      query: req.query.userExercise,
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) {
      console.log('an error was thrown in fetching exercise from API');
    } else {
      console.log(body);
      res.send(body);
    }
  });
});

app.get('/userfoods', function(req, res) {
  console.log('this is the req.url ', req.query)
});

app.get('/foods', function(req, res) {
  console.log('this is the request body ', req.body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`);
});
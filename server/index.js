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
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

var xAppKey = '76473ef11688b7d9665a46e225cfecad';
var xAppId = '1a7a76a9';

app.get('/test', function(req, res) {
  var options = { 
    method: 'GET',
    url: 'https://trackapi.nutritionix.com/v2/search/instant',
    qs: { 
      query: req.query.userFood
    },
    sort: {
      "field":"_score",
      "order":"desc"
    },
    min_score: 0.5,
    fields: [
      "item_name",
      "nf_calories",
      "serving_qty"

    ],
    limit: 20,
    headers: { 
       'cache-control': 'no-cache',
       'x-app-key': xAppKey,
       'x-app-id': xAppId
   }};
  request(options, function (error, response, body) {
    if (error) {
      console.log('here in error')
    throw new Error(error);
  } else {
    res.status(200)
    var commonFoods = JSON.parse(body).common.slice(0,5)
    var branded = JSON.parse(body).branded.slice(0,5)
    var foodMatches = commonFoods.concat(branded)
    //console.log(foodMatches)
    res.send(foodMatches);
    res.status(200);
    res.end();
  }
})
})  

app.post('/foods', function(req, res) {
  var date = new Date(parseInt(req.body.date));
  date = JSON.stringify(date).split('T')[0];
  date = date.split('');
  date.splice(0, 1);
  date = date.join('');
  console.log('this is the data after all ', typeof date);
  console.log(date)
  console.log(req.body.username)
  db.insertFoodAndDataForUserAsync(req.body.username, date, req.body.food[0].food_name, req.body.food[0].nf_calories, req.body.food[0].nf_protein, req.body.food[0].nf_total_fat, req.body.food[0].nf_total_carbohydrate)
  .then((result) => {
    res.status(201);
    res.send('data inserted successfully')
    res.end();
  })
  .catch((err) => {
    console.log(err)
    res.end('there was an error')
  })
})


app.get('/userfood', function(req, res) {
  var date = new Date(parseInt(req.query.date));
  date = JSON.stringify(date).split('T')[0];
  date = date.split('');
  date.splice(0, 1);
  date = date.join('');
  console.log('this is the username ' , req.query.username);
  console.log('this is the date ' , date);
  db.getFoodsFromUserOnDateAsync(req.query.username, date)
  .then((foodHistory)=> {
    res.status(200);
    res.send(foodHistory);
    res.end();
  })
  .catch((err)=>{
    console.log(err)
  })
})


app.post('/signup', (req, res)=>{
  db.isNewUserAsync(req.body.userName)
  .then(()=>{
    return bcrypt.genSaltAsync(10);
  })
  .then(salt=>{
    return bcrypt.hashAsync(req.body.password, salt);
  })
  .then(hashedPassword=>{
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
      'x-app-key': xAppKey,
      'x-app-id': xAppId 
    },
    body: { 
      query: req.query.addedFood,
      timezone: 'US/Eastern' 
     },
     json: true 
   };
  request(options, function (error, response, body) {
      if (error) {
        console.log('here in error')
      throw new Error(error);
    } else {
      res.status(200)
      res.send(body.foods)
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

// app.get('/userfoods', function(req, res) {
//   console.log('this is what the request query ', req.query)
//   var username = req.query.username;
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`);
});
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

/// DEPRECATED


// app.get('/items', function (req, res) {
//   items.selectAll(function (err, data) {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.send(data);
//     }
//   });

// });



app.get('/foods', function (req, res) {
  //the below is some code I've added in to verify the client get request works
  //*********************TestCode************************//
  //console.log('this should be the body ', req.url)

  //res.send('this is data from the server')
  //res.status(200)
  //********************TestCode*************************//
  //res.send('this is data from the server')
  //res.status(200)
  // console.log(req.query.userFood);
  //********************TestCode*************************//

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
      // console.log(body.foods);
      res.send(body.foods);
      res.end();

    }

  });
});

/*get request for exercise*/
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

  // res.send('<>hello from server/index.js<>');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`);
});
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')

var app = express();


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
    // filters: {
    //   not: {
    //    "item_type":2
    //   }
    // },
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
    console.log(foodMatches)
    res.send(foodMatches);
    res.status(200);
    res.end();
  }
})
})  




app.get('/foods', function (req, res) {
  //console.log(req.query.userFood)
  var options = { 
    method: 'POST',
    url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    headers: { 
      'content-type': 'application/json',
      'x-app-key': xAppKey,
      'x-app-id': xAppId 
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
      console.log('here in error')
	  throw new Error(error);
	} else {
	  res.status(200)
	  console.log(body.foods)
	  res.send(body.foods)
	  res.end();
	  
	}
	
    });
  });





app.listen(3000, function () {
  console.log('listening on port 3000!');
});
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.get('/food', function (req, res) {
  //the below is some code I've added in to verify the client get request works
  //*********************TestCode************************//
  console.log('this should be the body ', req.url)
  res
  .json('this is data from the server')
  .status(200)
  //********************TestCode*************************//


  // items.selectAll(function (err, data) {
  //   if (err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});


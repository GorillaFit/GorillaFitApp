var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(express.static(__dirname + '/../client/dist'));

app.get('/items', function (req, res) {
  items.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});


// handle incoming get requests from the client and then
//app.get()
  // get request to the api and them
  //app.get()
    // send data back to the client
    //res.send()




app.listen(3000, function () {
  console.log('listening on port 3000!');
});


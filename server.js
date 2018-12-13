// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/api/timestamp', (req, res, next) => {
  var date = new Date();
  var time = date.getTime();
  var utc = date.toUTCString();
  req.time = {"unix": time, "utc" : utc };
  next();
},(req,res)=> {
  res.json(req.time);  
});

// your first API endpoint... 
app.get("/api/timestamp/:date_string", (req, res, next) => {
  var date = req.params.date_string;
  var time = date.getTime();
  var utc = date.toUTCString();
  req.time = {"unix": time, "utc" : utc };
  next();
},(req,res)=> {
  res.json(req.time);  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

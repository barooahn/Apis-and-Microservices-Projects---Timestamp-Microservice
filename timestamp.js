var express = require('express');
var app = express();


app.get("https://enchanting-pea.glitch.me/", function(req, res) {
    console.log('root');
  });


app.get('https://enchanting-pea.glitch.me/api/timestamp', (req,res) => {
  console.log('here');
  //res.json({ 'date_string': `${req.query.date} ${req.query.last}`});
}); 

app.get('/:word/echo', (req, res) => {
  res.json({"echo": req.params.word});
});
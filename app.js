var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World 4");
});

app.listen(3000);

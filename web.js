var express = require('express');

var app = express.createServer(express.logger());

var buff;
fs.readfile(__dirname+'index.html', function(err, data) {
  if (err) throw err;
  buff = data;
}

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

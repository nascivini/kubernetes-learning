var express = require('express');
var app = express();


app.get('/', (req, res) => {
  res.send('Hello, im an app deployed on kubernetes')
})

var server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s.%s', host, port)
})

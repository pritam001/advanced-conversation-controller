/*var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

}) */
var http = require("http"),
fs = require("fs"),
io = require("socket.io"),
index;
fs.readFile("./chat.html", function (err, data) {
 if (err) {
    throw err;
 }
 index = data;
});
var server = http.createServer(function(request, response) {
  response.writeHeader(200, {"Content-Type": "text/html"});
  response.write(index);
  response.end();
}).listen(8081);

var socket = io.listen(server);

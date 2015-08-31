var express = require("express");
var http = require("http");
var https = require("https");
var Config = require("./lib/config");

var app = express();
var conf = new Config();

// Temporary api authentication, will be replaced with passport
app.use(function (req, res, next) {
  if (typeof req.query.apikey === "undefined") {
    res.status(401).send("unauthorised");
    return;
  }
  if (req.query.apikey !== "test-key") {
    res.status(401).send("unauthorised");
    return;
  }
  next();
});

// Routes can go here

http.createServer(app).listen(conf.server.port);
https.createServer({/* SSL certificate goes here*/}, app).listen(conf.server.sslPort);

console.log("HTTP Server running on http://127.0.0.1:" + conf.server.port + "/");
console.log("HTTPS Server running on http://127.0.0.1:" + conf.server.sslPort + "/");

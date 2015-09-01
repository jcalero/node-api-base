var express = require("express");
var Config = require("./lib/config");
var dummy = require("./routes/dummy");

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

app.get('/ping', dummy.ping);

app.listen(conf.server.port);

console.log("HTTP Server running on http://127.0.0.1:" + conf.server.port + "/");

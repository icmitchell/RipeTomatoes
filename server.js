var express = require('express');
var morgan = require('morgan'); // JUST FOR LOGS
var session = require('express-session') // for sessions
var bodyParser = require('body-parser') // for req.body
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var path = require("path");
var app = express();

var passportInit = require("./scripts/passport.js")
var routes = require("./routes")

var PORT = process.env.PORT || 8080;

app.use(session({ 
  secret: 'secretKey',
  resave: true, 
  saveUninitialized: true,
  cookie: { maxAge: 100 * 60 * 60 * 24 * 30}
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('combined'));
app.use(express.static(__dirname + '/public/assets'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


passportInit()

app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

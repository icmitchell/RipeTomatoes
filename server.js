var express = require('express');
var morgan = require('morgan'); // JUST FOR LOGS
var session = require('express-session') // for sessions
var bodyParser = require('body-parser') // for req.body
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;
var mongoose = require("mongoose");

app.use(session({ 
  secret: 'secretKey',
  resave: true, 
  saveUninitialized: true,
  cookie: { maxAge: 100 * 60 * 60 * 24 * 30}
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// var User = require("./models");
var User = require("./database/userData.js")

mongoose.connect("mongodb://localhost/User");

function loggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.status(403).send("Unauthorized")
  }
}

passport.use(new LocalStrategy(function(username, password, done) {
  User.findOne({
    'username': username
  }).then(function(user) {
   bcrypt.compare(password, user.password, function(err, res) {
    if (user == null) {
      return done(null, false)
    }
    else if (res) {
      return done(null, user)
    }
    return done(null, false)
  })
 })
}))

passport.serializeUser(function(user, done) { // Standered Serialize for session
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  User.findOne({
    '_id': id
  }).then(function (user) {
    if (user == null) {
      done(new Error('Wrong user id.'))
    }
    done(null, user) 
  })
})

app.post("/api/user", function(req, res) {
  console.log(req.body)
  User.create(req.body)
    .then(function(UserUser) {
      // If saved successfully, send the the new User document to the client
      res.json(UserUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./newUser.html"));
});

app.post('/login', passport.authenticate('local', {failureRedirect: '/', successRedirect: '/dashboard'}))

app.get("/dashboard", function(req, res) {
  res.send("Logged In!");
});



// User.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  })


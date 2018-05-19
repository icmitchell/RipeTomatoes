var express = require("express");
var morgan = require("morgan"); // JUST FOR LOGS
var session = require("express-session"); // for sessions
var bodyParser = require("body-parser"); // for req.body
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcrypt");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 5000;
var mongoose = require("mongoose");

app.use(
  session({
    secret: "secretKey",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 100 * 60 * 60 * 24 * 30 }
  })
);


app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
// var User = require("./models");


app.use(
  express.static(
    path.join(__dirname, "material-dashboard-react-html-v1.2.0/build")
  )
);

mongoose.connect(
  "mongodb://Admin:pass@ds235788.mlab.com:35788/heroku_xcbthczk"
);
var User = require("./database/userData.js");

function loggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.status(403).send("Unauthorized");
  }
}

passport.use(new LocalStrategy(function(username, password, done) {
    console.log(username)
    User.findOne({
      username: username
    }).then(function(user) {
      bcrypt.compare(password, user.password, function(err, res) {
        if (user == null) {
          return done(null, false);
        } else if (res) {
          return done(null, user);
        }
        return done(null, false);
      });
    });
  })
);

passport.serializeUser(function(user, done) {
  // Standered Serialize for session
  console.log(user)
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({
    _id: $oid.id
  }).then(function(user) {
    if (user == null) {
      done(new Error("Wrong user id."));
    }
    done(null, user);
  });
});

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);
require("./routes/passportRoutes.js")(app);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(
      __dirname + "/material-dashboard-react-html-v1.2.0/build/index.html"
    )
  );
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

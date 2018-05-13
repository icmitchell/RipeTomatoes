var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var express = require('express');
var morgan = require('morgan'); // JUST FOR LOGS
var session = require('express-session') // for sessions
var bodyParser = require('body-parser') // for req.body


module.exports = function() {

		function loggedIn(req, res, next) {
			if (req.user) {
				next();
			} else {
				res.status(403).send("Unauthorized")
			}
		}

		passport.use(new LocalStrategy(function(username, password, done) {
			db.User.findOne(
			{
				where: {
					'name': username
				}
			}).then(function(user) {
				bcrypt.compare(password, user.password, function(err, res) {
					if (user == null) {
						return done(null, false)
					} else if (res) {
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
  	db.User.findOne({
  		where: {
  			'id': id
  		}
  	}).then(function(user) {
  		if (user == null) {
  			done(new Error('Wrong user id.'))
  		}
  		done(null, user)
  	})
  })
  
}


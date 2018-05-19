var User = require("../database/userData.js")
var passport = require('passport'); 
var express = require("express");
var app = express();


module.exports = function(app) {


	app.post('/login', passport.authenticate('local', {failureRedirect: '/'}), function(req, res) {
		res.send(res)
	});

	app.get('/logout',(req,res)=>{
		req.logout();
		res.redirect('/');
	})
}
 

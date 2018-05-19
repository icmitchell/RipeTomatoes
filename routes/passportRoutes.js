var User = require("../database/userData.js")
var passport = require('passport'); 
var express = require("express");
var app = express();


module.exports = function(app) {


	app.post('/login', passport.authenticate('local', {failureRedirect: '/'}), ()=> {
		res.send(req)
	})

	app.get('/logout',(req,res)=>{
		req.logout();
		res.redirect('/');
	})
}
 

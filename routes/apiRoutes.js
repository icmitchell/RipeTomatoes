var path = require("path");
var User = require("../database/userData.js")

module.exports = function(app) {
	app.post("/api/user", function(req, res) {
		console.log(req.body)
		User.create(req.body)
		.then(function(UserUser) {
			res.json(UserUser);
		})
		.catch(function(err) {
			res.json(err);
		});
	});


};

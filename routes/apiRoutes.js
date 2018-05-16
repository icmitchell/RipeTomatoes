var path = require("path");
var User = require("../database/userData.js")
var WatchlistController = require("../controllers/WatchListController.js")
var UserController = require("../controllers/UserController.js")

module.exports = function(app) {
	app.post("/api/user/add", function(req, res) {
		UserController.create(req, res)
	});

//protected routes

	app.get("/api/user/view", function(req, res) {
		UserController.findByUsername(req, res)
	});

	app.post("/api/user/edit", function(req, res) {
		UserController.update(req, res)
	});

	app.post("/api/user/remove", function(req, res) {
		UserController.remove(req, res)
	});

//watchlist

	app.get("/api/watchlist/view", function(req, res) {
		WatchlistController.findById(req, res)
	});

	app.post("/api/watchlist/add", function(req, res) {
		WatchlistController.addMovie(req, res)
	});

	app.post("/api/watchlist/edit", function(req, res) {
		WatchlistController.editMovie(req, res)
	});

	app.post("/api/watchlist/remove", function(req, res) {
		WatchlistController.removeMovie(req, res)
	});

};

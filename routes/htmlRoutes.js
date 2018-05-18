var path = require("path");
var User = require("../database/userData.js")

function loggedIn(req, res, next) {
	if (req.user) {
		next();
	} else {
		res.redirect("/")
	}
} 


module.exports = function(app) {

	// app.get("/dashboard", function(req, res) {
	// 	// console.log(req.user)
	// 	res.sendFile(path.join(__dirname, "../material-dashboard-react-html-v1.2.0/public/index.html"));
	// 	// db.Pass.findAll({
	// 	// 	where: {
	// 	// 		userId: req.user.dataValues.id
	// 	// 	}
	// 	// })
	// 	// .then(function(result) {

	// 	// })
	// })
	// 	app.get("/", function(req, res) {
	// 	res.sendFile(path.join(__dirname, "../public/home/index.html"));
	// });
	
	// app.get("/survey", function(req, res) {
	// 	res.sendFile(path.join(__dirname, "../public/survey.html"));
	// });

	app.get("/dashboard", function(req, res) {
		res.sendFile(path.join(__dirname, "../material-dashboard-react-html-v1.2.0/public/index.html"));
	})
	app.get("/", function(req, res) {
		res.redirect(''); //redirect to Ripe-Tomatoes2
	});
	
	app.get("/survey", function(req, res) {
		res.redirect(''); //redirect to Ripe-Tomatoes2
	});

};

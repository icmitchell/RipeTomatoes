// var bcrypt = require('bcrypt');
// module.exports = function(sequelize, DataTypes) {
// 	var User = sequelize.define("User", {
// 		username: {
// 			type: DataTypes.STRING,
// 			allowNull: false
// 		},
// 		password: {
// 			type: DataTypes.TEXT,
// 			allowNull: false
// 			// validate: {
// 			// 	len: [6,20]
// 			// }
// 		},
// 		email: {
// 			type: DataTypes.TEXT,
// 			allowNull: false
// 		},
// 		phone: {
// 			type: DataTypes.TEXT,
// 			allowNull: true
// 		},
// 		name: {
// 			type: DataTypes.TEXT,
// 			allowNull: true
// 		}
// 	});

// 	User.beforeCreate(function(user, options) {
// 		return cryptPassword(user.password)
// 		.then(success => {
// 			user.password = success;
// 		})
// 		.catch(err => {
// 			if (err) console.log(err);
// 		});
// 	});

// 	function cryptPassword(password) {
// 		console.log("cryptPassword " + password);
// 		return new Promise(function(resolve, reject) {
// 			bcrypt.genSalt(10, function(err, salt) {
// 				console.log("salting")

// 				if (err) return reject(err);
// 				console.log("salted")
// 				bcrypt.hash(password, salt, function(err, hash) {
// 					console.log(err)
// 					if (err) return reject(err);
// 					console.log("hashed")
// 					return resolve(hash);
// 				});
// 			});
// 		});
// 	}

// 	return User;
// };  


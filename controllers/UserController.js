const User = require("../database/userData.js")


module.exports = {
 findByUsername: function(req, res) {
  User.findOne({
   'username': req.body.username
 })
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err))
},
 create: function(req, res) {
  User.create({
    'username': req.body.username,
    'password': req.body.password,
    'email': req.body.email,
    'movie1': req.body.movie1,
    'movie2': req.body.movie2,
    'movie3': req.body.movie3,
  })
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err))
},
update: function(req, res) {
  User.findOneAndUpdate({ _id: req.user._id }, req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
},
remove: function(req, res) {
  User.findById({ _id: req.user._id })
  .then(dbModel => dbModel.remove())
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
}
};

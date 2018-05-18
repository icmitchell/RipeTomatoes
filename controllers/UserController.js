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
  User.create(req.body)
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

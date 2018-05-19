const User = require("../database/userData.js")


module.exports = {
  findById: function(req, res) {
    User.findOne({
      'username': req.body.username
   })
    .then(dbModel => {return(dbModel)})
    .catch(err => res.status(422).json(err))
  },

  addMovie: function(req, res) {
    User.update(
      { _id: req.body.id },
      { $push: { watch_list: req.body.movie } }
      ).then(dbModel => res.json(dbModel.watch_list))
    .catch(err => res.status(422).json(err))
  },

  editMovie: function(req, res) {
    User.update(
      { _id: req.body.id },
      { $pull: { watch_list: req.body.movie.title } }
      ).then(User.update(
        { _id: req.body.id },
        { $push: { watch_list: req.body.movie } }
        )).then(dbModel => res.json(dbModel.watch_list))
      .catch(err => res.status(422).json(err));
    },

    removeMovie: function(req, res) {
      User.update(
        { _id: req.body.id },
        { $pull: { watch_list: req.body.movie } }
        ).then(dbModel => res.json(dbModel.watch_list))
      .catch(err => res.status(422).json(err));
    }
  };

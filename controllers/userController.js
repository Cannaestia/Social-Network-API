const User = require('../models')

// GET All users
module.exports = {
 getUsers(req, res) {
  User.user.find()
    .then((users) => res.json(users));
 },

 // GET a siingle user by it's _id: and populated thought and friend data
 getSingleUser(req, res) {
  User.findOne({ _id: req.params.userId })
    .select('-__v')
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},
// CREATE a new user
createUser(req, res) {
  User.create(req.body)
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => res.status(500).json(err));
},

// Update a user
updateUser(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with this ID!' })
        : res.json(video)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},

// DELETE to remove user by it's _id:
deleteUser(req, res) {
  User.findOneAndRemove({ _id: req.params.userId })
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with this ID!' })
        : User.findOneAndUpdate(
            { users: req.params.videoId },
            { $pull: { users: req.params.userId } },
            { new: true }
          )
    )
    .then((user) =>
      !user
        ? res
            .status(404)
            .json({ message: 'User created but no user with this id!' })
        : res.json({ message: 'User successfully deleted!' })
    )
    .catch((err) => res.status(500).json(err));
},
};





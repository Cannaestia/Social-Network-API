const { User, Thought } = require("../models");

// GET All users
module.exports = {
  getAllUsers(req, res) {
    User.find().then((user) => res.json(user));
  },

  // GET a siingle user by it's _id: and populated thought and friend data
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
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
          ? res.status(404).json({ message: "No user with this ID!" })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // DELETE to remove user by it's _id:
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: User.thoughts } })
      )
      .then(() => res.json({ message: 'User and thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  
// Add Friend
  addFriend(req, res) {
    console.log('You are adding a Friend');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendsId } },
      { runValidators: true, new: true }
    )
      .then((friends) =>
        !friends
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(friends)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove Friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendsId } },
      { runValidators: true, new: true }
    )
      .then((friend) =>
        !friend
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },
};

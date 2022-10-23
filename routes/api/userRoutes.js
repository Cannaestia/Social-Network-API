const router = require('express').Router();

const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

router.route('/')
  .get(getAllUsers)
  .post(createUser);

router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userId/friends/:friendsId')
  .put(addFriend)
  .delete(removeFriend);

module.exports = router;









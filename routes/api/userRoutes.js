const router = require('express').Router();

const {
  getAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
  makeFriend,
  deleteFriend,
} = require('../../controllers/userController');

router.route('/')
  .get(getAllUsers)
  .post(createUser);

router.route('/:id')
  .get(findUserById)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userId/friends/:friendId')
  .post(makeFriend)
  .delete(deleteFriend);

module.exports = router;









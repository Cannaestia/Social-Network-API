const router = require('express').Router();

const {
  getThoughts,
  createThoughts,
  getSingleThoughts,
  updateThoughts,
  deleteThoughts,
  removeReaction,
  addReaction,
} = require('../../controllers/thoughtController');

router.route('/')
  .get(getThoughts)
  .post(createThoughts);

router.route('/:thoughtId')
  .get(getSingleThoughts)
  .put(updateThoughts)
  .delete(deleteThoughts);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
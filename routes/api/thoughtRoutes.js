const router = require('express').Router();

const {
  getAllThoughts,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
  removeReaction,
  addReaction,
} = require('../../controllers/thoughtController');

router.route('/')
  .get(getAllThoughts)
  .post(createThought);

router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

router.route('/:thoughtId/reactions')
  .put(addReaction);


module.exports = router;
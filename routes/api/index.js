const router = require('express').Router();
const { model } = require('mongoose');
const thoughtRoutes = require ('./thoughtRoutes');
const userRoutes = require('./userRoutes.js');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

model.exports = router;


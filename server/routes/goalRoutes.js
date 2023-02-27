const express = require('express');
const router = express.Router();
const {getGoal, createGoal, updateGoal, deleteGoal} = require('../controller/goalController');
const {protect} = require('../middleware/authMiddleware')

//READ AND CREATE
router.route('/').get(protect, getGoal).post(protect, createGoal);

//UPDATE AND DELETE
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
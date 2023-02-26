const express = require('express');
const router = express.Router();
const {getGoal, createGoal, updateGoal, deleteGoal} = require('../controller/goalController');

//READ AND CREATE
router.route('/').get(getGoal).post(createGoal);

//UPDATE AND DELETE
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router;
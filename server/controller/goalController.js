const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModel');
const User = require('../model/userModel');

// @desc    Get all Goals
// @route   GET /api/goals
// @access  Private
const getGoal = asyncHandler(async(req, res) => {
  const goals = await Goal.find({
    user: req.user.id
  });
  res.status(200).json(goals);
});

// @desc    Post a Goals
// @route   POST /api/goals
// @access  Private
const createGoal = asyncHandler(async(req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please Add a Textfield')
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id
  })

  res.status(200).json(goal)
});

// @desc    Update a Goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async(req, res) => {
  const goal = await Goal.findById(req.params.id);

  if(!goal) {
    res.status(400)
    throw new Error('Goal Not Found');
  }

  // Check for User
  if (!req.user) {
    res.status(401)
    throw new Error('User Not Found')
  }

  // Make sure Logged In user Match the Goal User
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User Not Authorized')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.status(200).json(updatedGoal);
});

// @desc    Delete a Goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async(req, res) => {
  const goal = await Goal.findById(req.params.id);

  if(!goal) {
    res.status(400)
    throw new Error('Goal Not Found');
  }

  // Check for User
  if (!req.user) {
    res.status(401)
    throw new Error('User Not Found')
  }

  // Make sure Logged In user Match the Goal User
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User Not Authorized')
  }

  await goal.remove()

  res.status(200).json({
    id: req.params.id
  })
});

module.exports = {
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal
}
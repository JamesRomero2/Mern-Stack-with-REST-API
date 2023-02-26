const asyncHandler = require('express-async-handler')

// @desc    Get all Goals
// @route   GET /api/goals
// @access  Private
const getGoal = asyncHandler(async(req, res) => {
  res.status(200).json({
    message: 'Get Goals'
  });
});

// @desc    Post a Goals
// @route   POST /api/goals
// @access  Private
const createGoal = asyncHandler(async(req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please Add a Textfield')
  }

  res.status(200).json({
    message: 'Create Goals'
  })
});

// @desc    Update a Goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async(req, res) => {
  res.status(200).json({
    message: `Updated Goals ${req.params.id}`
  })
});

// @desc    Delete a Goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async(req, res) => {
  res.status(200).json({
    message: `Delete Goals ${req.params.id}`
  })
});

module.exports = {
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal
}
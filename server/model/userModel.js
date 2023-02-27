const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please Add a Name']
  },
  email: {
    type: String,
    require: [true, 'Please Add an Email'],
    unique: true
  },
  password: {
    type: String,
    require: [true, 'Please Add a Password']
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
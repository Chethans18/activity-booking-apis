const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String,  required: true,unique: true },
  phone: String,
  password: String
});

module.exports = mongoose.model('User', userSchema);

const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },      // passwordHashed
  email:    { type: String, required: true, unique: true },
  roles:    { type: [String], default: ['user'] }
}, { timestamps: true });

module.exports = model('User', userSchema);
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { ObjectId } = mongoose.Schema.Types;

const User = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  entries: [{ type: ObjectId, ref: 'Entry' }],
});

User.pre('save', function(next) {
  if (this.password != null) {
    bcrypt.hash(this.password, 10, (error, hashed) => {
      if (error) return next(error);
      this.password = hashed;
      next();
    });
  }
});

User.methods.checkPassword = function(guess, callback) {
  bcrypt.compare(guess, this.password, (error, isValid) => {
    if (error) return callback(error);
    callback(null, isValid);
  });
};
module.exports = mongoose.model('User', User);

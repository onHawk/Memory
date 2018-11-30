const mongoose = require('mongoose');

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
  timestamps: true,
});

User.pre('save', function(next) {
  if (this.password != null) {
    bcrypt.hash(this.password, 24, (error, hashed) => {
      if (error) return next(error);
      this.password = hashed;
      next();
    });
  }
});

User.methods.checkPassword = function(guess, callback) {
  bcyrpt.compare(guess, this.password, (error, isValid) => {
    if (error) return callback(error);
    callback(null, isValid);
  });
};
module.exports = mongoose.model('User', User);

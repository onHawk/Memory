const mongoose = require('mongoose');

const Entry = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
    required: true,
    minlength: 4,
  },
  label: {
    type: String,
    minlength: 2,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});
module.exports = mongoose.model('Entry', Entry);

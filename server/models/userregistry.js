var mongoose = require('mongoose');

var UserRegistry = mongoose.model('UserRegistry',{
  userName: {
    type: String,
    required: true,
    minLength : 1,
    trim: true
  },
  userEmailAddressVerified: {
    type: Boolean,
    default: true
  },
  recordedOn:{
    type: Date,
    default: Date.now
  }
});

module.exports = {UserRegistry};

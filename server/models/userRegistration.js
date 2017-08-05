var mongoose = require('mongoose');

var UserRegistration = mongoose.model('UserRegistration',{
  userName:{
    type: String,
    required: true,
    minLength : 1,
    trim: true
  },
  userUniqueCode:{
    type: Number,
    required: true,
    default: 1234
  },recordedOn:{
    type: Date,
    default: Date.now
  }
});

module.exports = {UserRegistration};

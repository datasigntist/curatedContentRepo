var mongoose = require('mongoose');

var UserQueries = mongoose.model('UserQueries',{
  userName: {
    type: String,
    required: true,
    minLength : 1,
    trim: true
  },
  enrolledModule:{
    type: String,
    required: true,
    minLength : 1,
    trim: true
  },
  userQueries:{
    type: Object
  },
  recordedOn:{
    type: Date,
    default: Date.now
  }
});

module.exports = {UserQueries};

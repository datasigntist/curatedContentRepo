var mongoose = require('mongoose');

var UserNotes = mongoose.model('UserNotes',{
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
  userNotes:{
    type: Object
  },
  recordedOn:{
    type: Date,
    default: Date.now
  }
});

module.exports = {UserNotes};

var mongoose = require('mongoose');

var LogData = mongoose.model('LogData',{
  userName:{
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
  recordedOn:{
    type: Date,
    default: Date.now
  }
});

module.exports = {LogData};

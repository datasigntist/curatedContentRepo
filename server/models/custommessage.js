var mongoose = require('mongoose');

var CustomMessage = mongoose.model('CustomMessage',{
  msgKey: {
    type: Number,
    required: true
  },
  msgString: {
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

module.exports = {CustomMessage};

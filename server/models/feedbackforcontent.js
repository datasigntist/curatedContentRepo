var mongoose = require('mongoose');

var FeedbackForContent = mongoose.model('FeedbackForContent',{
  userName:{
    type: String,
    required: true,
    minLength : 1,
    trim: true
  },
  feedbackModule:{
    type: String,
    required: true,
    minLength : 1,
    trim: true
  },
  feedbackOnContent:{
    type: Number,
    default: 1
  },
  recordedOn:{
    type: Date,
    default: Date.now
  }
});

module.exports = {FeedbackForContent};

var mongoose = require('mongoose');

var CuratedContent = mongoose.model('CuratedContent',{
  learningStep: {
    type: Number,
    required: true
  },
  contentSubjectArea: {
    type: String,
    required: true,
    minLength : 1,
    trim: true
  },
  contentType: {
    type: String,
    required: true,
    minLength : 1,
    trim: true
  },
  contentData: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  contentOptions: {
    type: Array
  },
  correctOption: {
    type: String,
    minLength: 1,
    trim: true
  },
  recordedOn:{
    type: Date,
    default: Date.now
  }
});

module.exports = {CuratedContent};

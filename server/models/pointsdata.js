var mongoose = require('mongoose');

var PointsData = mongoose.model('PointsData',{
  userName:{
    type: String,
    required: true,
    minLength : 1,
    trim: true
  },
  cumulCuriosityPoints:{
    type: Number,
    default:0
  },
  cumulKnowledgePoints:{
    type: Number,
    default:0
  },
  cumulCollabPoints:{
    type: Number,
    default:0
  },
  recordedOn:{
    type: Date,
    default: Date.now
  }
});

module.exports = {PointsData};

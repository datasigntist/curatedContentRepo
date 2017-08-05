var mongoose = require('mongoose');

var UserData = mongoose.model('UserData',{
  userName:{
    type: String,
    required: true,
    minLength : 1,
    trim: true
  },
  userAddress:{
    type: String,
    default:''
  },
  //enrolledModules: [],
  enrolledModule:{
    type: String,
    required: true,
    minLength : 1,
    trim: true
  },
  learningStep: {
    type: Number,
    required: true,
    default: 1
  },
  recordedOn:{
    type: Date,
    default: Date.now
  }
  // ,cumulCuriosityPoints:{
  //   type: Number,
  //   default:0
  // },
  // cumulKnowledgePoints:{
  //   type: Number,
  //   default:0
  // },
  // cumulCollabPoints:{
  //   type: Number,
  //   default:0
  // }
});

module.exports = {UserData};

var mongoose = require('mongoose');

var UserData = mongoose.model('UserData',{
  userName:{
    type: String,
    required: true,
    minLength : 1,
    trim: true
  },
  userAddress:{

  },
  enrolledModules: [],
  recordedOn:{
    type: Date,
    default: Date.now
  }
});

module.exports = {UserData};


// enrolledModule: {
//   moduleName: {
//     type: String,
//     required: true,
//     minLength : 1,
//     trim: true
//   },
//   moduleStep: {
//     type: Number,
//     required: true
//   }
// }

const _ = require('lodash');

const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose')
var {CuratedContent} = require('./models/curatedcontent');
var {UserData} = require('./models/userdata');
var {FeedbackData} = require('./models/feedbackdata');
var {PointsData} = require('./models/pointsdata');
var {LogData} = require('./models/logdata');
var {CustomMessage} = require('./models/custommessage');
var {UserRegistry} = require('./models/userregistry');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// app.post('/userdata', (req,res) => {
//   var userData = new UserData({
//     userName: req.body.userName,
//     userAddress: req.body.userAddress,
//     //enrolledModules: req.body.enrolledModules
//     enrolledModule: req.body.enrolledModule,
//     learningStep: 1
//   })
//
//   userData.save().then((doc)=>{
//     res.send(doc);
//   }, (err)=>{
//     return res.status(400).send(err);
//   });
//
// });

app.post('/custommessage', (req,res) => {
  var customMessage = new CustomMessage({
    msgKey: req.body.msgKey,
    msgString: req.body.msgString
  })

  customMessage.save().then((doc)=>{
    res.send(doc);
  }, (err)=>{
    return res.status(400).send(err);
  })
});

app.get('/custommessage', (req,res) => {
  CustomMessage.find((err, doc) => {

      if (err)
      {
        return res.status(400).send();
      }

      if (!doc)
      {
        return res.status(404).send();
      }

      res.send(doc);
    });
  }
);


app.post('/curatedcontent', (req,res) => {
  var curatedContent = new CuratedContent({
    learningStep: req.body.learningStep,
    contentSubjectArea: req.body.contentSubjectArea,
    contentSubjectAreaSubArea: req.body.contentSubjectAreaSubArea,
    contentType: req.body.contentType,
    contentDescription: req.body.contentDescription,
    contentURL: req.body.contentURL,
    contentOptions: req.body.contentOptions,
    correctOption: req.body.correctOption
  })

  curatedContent.save().then((doc)=>{
    res.send(doc);
  }, (err)=>{
    return res.status(400).send(err);
  })
});

app.get('/curatedcontent/:selection/1', (req,res) => {

  var pSelection = req.params.selection;

  CuratedContent.find().distinct(pSelection,
    (err, doc) => {

      if (err)
      {
        return res.status(400).send();
      }

      if (!doc)
      {
        return res.status(404).send();
      }

      res.send(doc);
  });
});

app.get('/curatedcontent/:selection/:contentSubjectArea/2', (req,res) => {

  var pSelection = req.params.selection;
  var pContentSubjectArea = req.params.contentSubjectArea;

  CuratedContent.find({contentSubjectArea: pContentSubjectArea}).distinct(pSelection,
    (err, doc) => {

      if (err)
      {
        return res.status(400).send();
      }

      if (!doc)
      {
        return res.status(404).send();
      }

      res.send(doc);
  });
});

app.get('/userregistry/:pUserEmailAddress', (req,res) => {

  var emailId = req.params.pUserEmailAddress;

  UserRegistry.findOne({userName: emailId},
    (err, doc) => {

      if (err)
      {
        return res.status(400).send();
      }

      if (!doc)
      {
        return res.status(404).send();
      }

      res.send(doc);
  });
});

app.post('/userregistry', (req,res) => {
  var userRegistry = new UserRegistry({
    userName: req.body.userName,
    userAddress: req.body.userAddress
  })

  userRegistry.save().then((doc)=>{
    res.send(doc);
  }, (err)=>{
    return res.status(400).send(err);
  })
});


app.get('/curatedcontent/:learningStep/:contentSubjectAreaSubArea/3', (req,res) => {

  var pLearningStep = req.params.learningStep;
  var pContentSubjectAreaSubArea = req.params.contentSubjectAreaSubArea;

  CuratedContent.findOne({
    learningStep: pLearningStep,
    contentSubjectAreaSubArea: pContentSubjectAreaSubArea
    },
    (err, doc) => {

      if (err)
      {
        return res.status(400).send();
      }

      if (!doc)
      {
        return res.status(404).send();
      }

      res.send(doc);
  });
});

app.get('/curatedcontent/:contentSubjectArea/4', (req,res) => {

  var pContentSubjectArea = req.params.contentSubjectArea;

  CuratedContent.where({contentSubjectAreaSubArea: pContentSubjectArea}).count( (err, count) => {

      if (err)
      {
        return res.status(400).send();
      }

      res.send({count});
  });
});


app.get('/userdata/:userName/:contentSubjectAreaSubArea', (req,res) => {
//app.get('/userdata', (req,res) => {

  var pUserName = req.params.userName;
  var pEnrolledModule = req.params.contentSubjectAreaSubArea;

  //var pUserName = _.result(req.body,['userName']);
  //var pEnrolledModule = _.result(req.body,['contentSubjectArea']);

  UserData.findOne({
    userName: pUserName,
    enrolledModule: pEnrolledModule
    },
    (err, doc) => {

      if (err)
      {
        return res.status(400).send();
      }

      if (!doc)
      {
        return res.status(404).send();
      }

      res.send(doc);
  });
});

app.post('/userdata', (req,res) => {

  var userData = new UserData({
    userName: req.body.userName,
    enrolledModule: req.body.enrolledModule,
    learningStep: 1
  });

  //console.log(JSON.stringify(userData));

  userData.save().then((doc)=>{
    res.send(doc);
  }, (err)=>{
    return res.status(400).send(err);
  })
});

app.post('/feedbackdata', (req,res) => {

  var feedbackData = new FeedbackData({
    userName: req.body.userName,
    feedbackModule: req.body.feedbackModule,
    feedbackOnContent: req.body.feedbackOnContent,
    feedbackOnExperience: req.body.feedbackOnExperience
  });

  //console.log(JSON.stringify(feedbackData));

  feedbackData.save().then((doc)=>{
    res.send(doc);
  }, (err)=>{
    return res.status(400).send(err);
  })
});

app.post('/logdata', (req,res) => {

  var logData = new LogData({
    userName: req.body.userName,
    enrolledModule: req.body.enrolledModule
  });

  //console.log(JSON.stringify(feedbackData));

  logData.save().then((doc)=>{
    res.send(doc);
  }, (err)=>{
    return res.status(400).send(err);
  })
});

//app.patch('/userdata/:userName', (req,res) =>
app.patch('/userdata', (req,res) =>
{
  //var pUserName = req.params.userName;
  var pUserName = _.result(req.body,['userName']);
  var pEnrolledModule = _.result(req.body,['enrolledModule']);

  //var earnedKnowledgePoints = Number(_.result(req.body,['earnedKnowledgePoints'])) || 0;
  var learningStep = Number(_.result(req.body,['learningStep'])) || 1;


  UserData.findOneAndUpdate({userName : pUserName, enrolledModule: pEnrolledModule},
    {$set:  {"learningStep": learningStep},
    //$inc:{"cumulCuriosityPoints":10,"cumulKnowledgePoints":earnedKnowledgePoints}
    },
    {upsert: true, new:true}).then((doc)=>{
    res.send(doc);
  }, (err)=>{
    return res.status(400).send(err);
  });

});

app.patch('/pointsdata', (req,res) =>
{
  var pUserName = _.result(req.body,['userName']);

  var earnedKnowledgePoints = Number(_.result(req.body,['earnedKnowledgePoints'])) || 0;

  PointsData.findOneAndUpdate({userName : pUserName},
    {$inc:{"cumulCuriosityPoints":10,"cumulKnowledgePoints":earnedKnowledgePoints}},
    {upsert: true, new:true}).then((doc)=>{
    res.send(doc);
  }, (err)=>{
    return res.status(400).send(err);
  });

});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

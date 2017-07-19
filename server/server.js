const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose')
var {CuratedContent} = require('./models/curatedcontent');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/curatedcontent', (req,res) => {
  var curatedContent = new CuratedContent({
    learningStep: req.body.learningStep,
    contentSubjectArea: req.body.contentSubjectArea,
    contentType: req.body.contentType,
    contentData: req.body.contentData,
    contentOptions: req.body.contentOptions,
    correctOption: req.body.correctOption
  })

  curatedContent.save().then((doc)=>{
    res.send(doc);
  }, (err)=>{
    return res.status(400).send(err);
  })
});

app.get('/curatedcontent/:learningStep/:contentSubjectArea', (req,res) => {

  var pLearningStep = req.params.learningStep;
  var pContentSubjectArea = req.params.contentSubjectArea;

  CuratedContent.findOne({
    learningStep: pLearningStep,
    contentSubjectArea: pContentSubjectArea
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

      res.send({doc});
  });


});


app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

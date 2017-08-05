const expect = require('expect');
const request = require('supertest');


const {app} = require('./../server');
const {CuratedContent} = require('./../models/curatedcontent');

beforeEach((done) => {
  CuratedContent.remove({}).then(() => {
    done();
  });
});

describe('POST /curatedcontent', () => {
  it('should create a new curated content', (done) =>{
    var text = {
        	"learningStep": 1,
        	"contentSubjectArea": "machinelearning",
        	"contentType": "TextContent",
        	"contentDescription": "In 1959, Arthur Samuel defined machine learning as a Field of study that gives computers the ability to learn without being explicitly programmed",
        	"contentURL" : "",
        	"contentOptions": [],
        	"correctOption": ""
        };

    request(app)
      .post('/curatedcontent')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        CuratedContent.find().then((doc) => {
          expect(doc.length).toBe(1);
          done();
        }).catch((e)=> done(e));

      });
  })
});

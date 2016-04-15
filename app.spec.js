var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongo = require('mongodb');
var myClient = mongo.MongoClient;
var url = 'mongodb://localhost/test';

app.use(jsonParser);

app.post('/api', function(req, res) {
  myClient.connect(url, function(error, db) {
    if (!error) {
      var books = db.collection('books');
      books.insert({
        title: req.body.title,
        author: req.body.author
      }, function(error, results) {
        res.send(results.result);
        db.close();
      });
    } else {
      res.sendStatus(500);
      console.log('Could not connect to the datbase: ' + error);
    }
  });
});

app.get('/api', function(req, res) {
  myClient.connect(url, function(error, db) {
    if (!error) {
      var books = db.collection('books');
      books.find({}).toArray(function(error, results) {
        res.json(results);
        db.close();
      });
    } else {
      res.sendStatus(500);
      console.log('Could not connect to the datbase: ' + error);
    }
  });
});

app.put('/api', function(req, res) {
  myClient.connect(url, function(error, db) {
    if (!error) {
      var books = db.collection('books');
      books.update(
        { author: req.body.author },
        { $set: { title: req.body.title }},
        function(error, results) {
          res.send(results.result);
          db.close();
        }
      );
    } else {
      res.sendStatus(500);
      console.log('Could not connect to the datbase: ' + error);
    }
  });
});

app.delete('/api', function(req, res) {
  myClient.connect(url, function(error, db) {
    if (!error) {
      var books = db.collection('books');
      books.remove({ title: req.body.title }, function(error, results) {
        res.send(results.result);
        db.close();
      });
    } else {
      res.sendStatus(500);
      console.log('Could not connect to the datbase: ' + error);
    }
  });
});

app.listen(8080, function() {
  console.log('server started');
});

const { MongoClient, ObjectID } = require('mongodb');

const uri = 'mongodb://localhost:27017/test';

var dbPromise = new Promise((resole, reject) => {
  MongoClient.connect(uri, function(err, db) {
    if (err) {
      reject(err);
    }
    else {
      resolve(db);
    }
    }
  }
})


    
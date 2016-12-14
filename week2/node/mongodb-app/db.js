const { MongoClient, ObjectID } = require('mongodb');

const uri = 'mongodb://localhost:27017/test';

MongoClient.connect(uri, (err, db) => {
  var Cars = db.collection('cars');
  Cars.find()
      .toArray()
      .then(cars => {
        console.log(cars)
        cars.forEach(car => console.log(car.brand))
      })
      .catch(error => {
        console.error(error)
      });
  // const carID = ObjectID('585098a506e33d0883648586')

  // Cars.findOneAndDelete({ _id: carId })
  //     .then(deleteLog) => {
  //       console.log(deleteLog);
  //     })  

  const carID = ObjectID('585098fb06e33d0883648589')

  Cars.findOneAndUpdate(
    { _id: carID }, 
    { $set: { brand: 'Subaru'}}
  )
  .then(updateLog => {
    console.log(updateLog)
  })
})

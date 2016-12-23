const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
const { connection: db } = mongoose;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', () => {
  console.log('Connected to the DB');
})

module.exports = db;
const { MongoClient, ObjectID } = require('mongodb');
const express = require('express');
const app = express()
const bodyParser = require('body-parser');
app.set('view engine', 'ejs')

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on 3000')
})

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/one', (req, res) => {
  res.render('one.ejs')
})

app.get('/two', (req, res) => {
  res.render('two.ejs')
})

app.get('/three', (req, res) => {
  res.render('three.ejs')
})

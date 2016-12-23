const { Schema } = require('mongoose');
const db = require('./init');
const mongoose = require('mongoose')

const counterSchema = new mongoose.Schema({
  count: Number,
  created_at: { type: Date, default: Date.now }
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;
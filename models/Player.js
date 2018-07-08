const mongoose = require('mongoose');

const { Schema } = mongoose;

const playerSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});

module.exports = playerSchema;

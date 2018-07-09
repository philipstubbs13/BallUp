const mongoose = require('mongoose');

// Save a reference to the schema constructor.
const { Schema } = mongoose;
// const PlayerSchema = require('./Player');

const GameSchema = new Schema({
  gameName: {
    type: String,
    trim: true,
    required: 'Name is required',
  },
  gameDate: {
    type: Date,
    trim: true,
    required: 'Date is required',
  },
  gameTime: {
    type: String,
    trim: true,
    required: 'Time is required',
  },
  ageGroup: {
    type: String,
    trim: true,
    required: 'Age group is required',
  },
  gender: {
    type: String,
    trim: true,
    required: 'Gender is required',
  },
  location: {
    type: String,
    trim: true,
    required: 'Location is required',
  },
  address: {
    type: String,
    trim: true,
    required: 'Address is required',
  },
  city: {
    type: String,
    trim: true,
    required: 'City is required',
  },
  state: {
    type: String,
    trim: true,
    required: 'State is required',
  },
  zipCode: {
    type: Number,
    trim: true,
    required: 'Zip code is required',
  },
  info: {
    type: String,
    trim: true,
    required: 'Additional info is required',
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

mongoose.model('games', GameSchema);

// title: String,
// body: String,
// subject: String,
// players: [PlayerSchema],
// yes: { type: Number, default: 0 },
// no: { type: Number, default: 0 },
// _user: { type: Schema.Types.ObjectId, ref: 'User' },
// dateSent: Date,
// lastResponded: Date,

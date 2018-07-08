const mongoose = require('mongoose');

const { Schema } = mongoose;
const PlayerSchema = require('./Player');

const gameSchema = new Schema({
  gameName: String,
  gameDate: Date,
  gameTime: String,
  ageGroup: String,
  gender: String,
  location: String,
  address: String,
  city: String,
  state: String,
  zipCode: Number,
  info: String,
  title: String,
  body: String,
  subject: String,
  players: [PlayerSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model('games', gameSchema);

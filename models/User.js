const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  googleDisplayName: String,
  games: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
      console.log('current user', user);
    });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true,
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });
    // log out the user's google profile.
    // Remove this statement when app goes to production.
    console.log(profile);

    if (existingUser) {
      // We alread have a reacord with the given profile ID.
      return done(null, existingUser);
    }

    // We don't have a user record with this ID, make a new record.
    const user = await new User({
      googleId: profile.id,
      googleDisplayName: profile.displayName,
    }).save();
    done(null, user);
  }),
);

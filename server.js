const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const routes = require('./routes');
// const User = require('./models/User')
const passport = require('passport'); // at header

// USER AUTH REQUIREMENTS:
// const passport = require('./passport');

// Server will use port 3001.
const PORT = process.env.PORT || 3001;
// Yes, the app uses express.
const app = express();

// Configure body parser for axios requests
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

// Require all models
// const db = require('./models');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// // Add routes, both API and view
// app.use(routes);

app.use(passport.initialize()); // after line no.20 (express.static)
require('./config/passport');

/* GET Google Authentication API. */
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  function (req, res) {
    const token = req.user.token;
    res.redirect('http://localhost:3000?token=' + token);
    console.log('token', token);
  },
);

// Current user request handler
app.get('/api/current_user', (req, res) => {
// res.send(req.session);
  res.send(req.user);
});

// Log user out of application
app.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ballup');

// If deployed, use the deployed database. Otherwise use the local ballup database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ballup';

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true,
});

// configurePassport
// const configurePassport = require('./controllers/passport')

// const passport = configurePassport(app, mongoose, User)

// Add routes, both API and view
// app.use(routes(passport, User));

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

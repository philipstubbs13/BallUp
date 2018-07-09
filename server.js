const mongoose = require('mongoose');
const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport'); // at header
// require keys
const keys = require('./config/keys');

// connect to MongoDB database.
mongoose.connect(keys.mongoURI);

// Server will use port 5000.
const PORT = process.env.PORT || 5000;
// app is created by the express library.
const app = express();

// Configure body parser for axios requests
app.use(bodyParser.json());

// Tell express to make use of cookies inside application.
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);

// Tell passport to make use of cookies to handle authentication.
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
// require('./routes/billingRoutes')(app);
// require('./routes/surveyRoutes')(app);

// Require database models
require('./models/User');
require('./models/Game');
require('./services/passport');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets.
  // like our main.js file or main.css file.
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route.
  // Send every request to the React app
  // Define any API routes before this runs
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

const passport = require('passport');
const path = require('path');
const router = require('express').Router();
// const apiRoutes = require('./api');

/* GET Google Authentication API. */
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  function (req, res) {
    const token = req.user.token;
    console.log(req.user);
    res.redirect('http://localhost:3000?token=' + token);
  },
);

// API Routes
// router.use('/api', apiRoutes);

module.exports = router;

const passport = require('passport');

module.exports = (app) => {
  // Route handlers
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  app.get(
    '/auth/google/callback', passport.authenticate('google'),
    (req, res) => {
      res.redirect('/home');
    },
  );

  // Log user out of application
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Current user request handler
  app.get('/api/current_user', (req, res) => {
    // res.send(req.session);
    res.send(req.user);
  });
};

const router = require('express').Router();
const gamesController = require('../controllers/gamesController');

module.exports = function () {
  // Matches with "/api/games"
  router.route('/api')
    .post(gamesController.create);

  return router;
};


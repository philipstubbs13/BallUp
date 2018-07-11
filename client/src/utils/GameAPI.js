import axios from 'axios';

export default {
  // Saves a game to the database
  saveGame(gameData) {
    return axios.post('/api/games', gameData);
  },

};
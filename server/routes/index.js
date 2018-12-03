const { restricted, authenticate } = require('../config/authenticate');

const { register } = require('../controllers/users/register');

module.exports = server => {
  server.post('/api/register', register);
};

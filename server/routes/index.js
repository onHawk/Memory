/**************** Authentication **************/
const { restricted, authenticate } = require('../config/authenticate');
const { register } = require('../controllers/users/register');
const { login } = require('../controllers/users/login');
/*********************************************/

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', authenticate, login);
};

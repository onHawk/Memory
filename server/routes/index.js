/**************** Authentication **************/
const { restricted, authenticate } = require('../config/authenticate');
const { register } = require('../controllers/users/register');
const { login } = require('../controllers/users/login');
/*********************************************/

/**************** CRUD functions *************/
const { createEntry } = require('../controllers/entries/addEntry');
/********************************************/
module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', authenticate, login);

  server.post('/api/create_page', restricted, createEntry);
};

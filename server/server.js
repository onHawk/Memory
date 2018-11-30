const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();

require('dotenv').load();

/*** Change for a .env */
const port = 5000;
/******************** */

const routes = require('./routes/');

mongoose
  .connect(
    'mongodb://localhost/journalentries',
    { useNewUrlParser: true }
  )
  .then(connect => {
    console.log('=== connected to mongo ===');
  })
  .catch(error => {
    console.log('error connecting to mongo');
  });

server.listen(port, () => {
  console.log(`=== Server running on ${port} ===`);
});

routes(server);

server.use(bodyParser.json());
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

module.exports = { server };

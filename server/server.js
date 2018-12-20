const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const server = express();

require('dotenv').load();

const port = process.env.PORT;

const routes = require('./routes/');

mongoose
  .connect(
    process.env.MONGO_DB,
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

server.use(bodyParser.json());
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

routes(server);

server.use(express.static(path.join(__dirname, '../client/build')));
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../', 'client', 'build', 'index.html'));
});

module.exports = { server };

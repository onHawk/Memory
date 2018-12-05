const Entry = require('../../models/Entry');
const User = require('../../models/User');

const getEntries = (req, res) => {
  const { entries } = req.user;
  console.log('user', req.user);
  res.json(entries);
};

module.exports = { getEntries };

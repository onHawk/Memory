const Entry = require('../../models/Entry');
const User = require('../../models/User');

/*********GET all user's entries********/
const getEntries = (req, res) => {
  const { entries } = req.user;
  // console.log('user', req.user);
  res.json(entries);
};

/*********GET single entry**************/
const getEntry = (req, res) => {
  const { id } = req.params;

  Entry.findById(id)
    .then(entry => {
      res.status(200).json(entry);
    })
    .catch(err => {
      res.json(err);
    });
};

/*********GET entries by label**********/
const entryByLabel = (req, res) => {
  const { label } = req.query;

  Entry.find({ label })
    .then(entries => {
      res.json(entries);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports = { getEntries, getEntry, entryByLabel };

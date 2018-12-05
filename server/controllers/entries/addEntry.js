const Entry = require('../../models/Entry');
const User = require('../../models/User');

const createEntry = (req, res) => {
  const { title, content, label } = req.body;

  const { _id } = req.user;

  const entry = new Entry({ title, content, label });
  console.log('User data', req.user);

  entry
    .save()
    .then(newentry => {
      User.findByIdAndUpdate(_id, { $addToSet: { entries: newentry._id } })
        .populate('entries')
        .then(user => {
          res.json(newentry);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

module.exports = { createEntry };

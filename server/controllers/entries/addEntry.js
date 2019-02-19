const Entry = require('../../models/Entry');
const User = require('../../models/User');

// const fs = require('fs');

const createEntry = (req, res) => {
  const { title, content, label } = req.body;

  const { _id } = req.user;

  const entry = new Entry({ title, content, label });

  if (req.file) {
    // consle.log('file', req.file);
    // fs.readFileSync(req.file.path)

    entry.img.data = req.file.path;
    entry.img.contentType = req.file.mimetype;
  }

  entry
    .save()
    .then(newentry => {
      User.findByIdAndUpdate(_id, { $addToSet: { entries: newentry._id } })
        .populate('entries')
        .then(user => {
          console.log(req.file);
          res.json(newentry);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

module.exports = { createEntry };

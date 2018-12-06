const Entry = require('../../models/Entry');
const User = require('../../models/User');

const editEntry = (req, res) => {
  const { id } = req.params;

  // const { title, content, label } = req.body;

  Entry.findByIdAndUpdate(id, req.body, { new: true })
    .then(entry => {
      // console.log('edited', entry);

      res.json(entry);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports = { editEntry };

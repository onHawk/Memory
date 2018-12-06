const Entry = require('../../models/Entry');
const User = require('../../models/User');

const deleteEntry = (req, res) => {
  const { id } = req.params;

  // const { _id } = req.user;

  Entry.findByIdAndDelete(id).then(entry => {
    console.log(entry);
    // User.findByIdAndRemove(_id).then(user => {
    // });
    res.json(entry);
  });
};

module.exports = { deleteEntry };

const User = require('../../models/User.js');

const { makeToken } = require('../../config/authenticate');

const login = (req, res) => {
  const { _id, username } = req.user;

  const tkn = { _id, username };
  const userToken = makeToken(tkn);

  User.findOne(_id)
    .then(user => {
      res.json({ userToken, user });
    })
    .catch(err => {
      res.json(err);
    });
};
module.exports = { login };

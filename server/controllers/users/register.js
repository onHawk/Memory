const User = require('../../models/User.js');

const { makeToken } = require('../../config/authenticate');

const register = (req, res) => {
  const { email, username, password, fullname } = req.body;

  if (!email || !username || !password || !fullname) {
    res.status(401).json({ message: 'Something is missing.' });
  }

  User.findOne({ username }).then(response => {
    if (response) {
      console.log(response);
      res.status(422).json({ message: 'User exists already' });
    } else {
      const user = new User(req.body);
      user
        .save()
        .then(registered => {
          console.log('New User: ', registered);
          const token = makeToken(registered);

          res.json({ token });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    }
  });
};

module.exports = { register };

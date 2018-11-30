const passport = require('passport');
const LocalStrategy = require('passport-local');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const User = require('../models/User');

function makeToken(user) {
  const timestamp = new Date().getTime();

  const payload = {
    sub: user._id,
    iat: timestamp,
    username: user.username,
  };

  const options = { expiresIn: '1h' };

  return jwt.sign(payload, secret, options);
}

const localStrategy = new LocalStrategy(function(username, password, done) {
  User.findOne({ username }, function(error, user) {
    if (error) return done(error);

    if (!user) return done(null, false);

    user.checkPassword(password, (error, valid) => {
      if (error) return done(error);

      if (valid) {
        const { _id, username } = user;
        return done(null, { _id, username });
      }

      return done(null, false);
    });
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromExtractors([
    ExtractJwt.fromUrlQueryParameter('jwt'),
    ExtractJwt.fromAuthHeaderAsBearerToken(),
  ]),
  secretOrKey: secret,
};

const jwtStrategy = new JwtStrategy(jwtOptions, function(payload, done) {
  console.log(payload, 'jwt payload');

  User.findById(payload.sub)
    .select('-password')
    .then(user => {
      if (user) done(null, user);
      else done(null, false);
    })
    .catch(err => {
      return done(err, false);
    });
});

passport.use(localStrategy);
passport.use(jwtStrategy);

const authenticate = passport.authenticate('local', { session: false });
const restricted = passport.authenticate('jwt', { session: false });

module.exports = { authenticate, restricted, makeToken };

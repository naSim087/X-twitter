

const passport = require('passport');

const authenticated = (req, res, next) => {
  passport.authenticate('jwt', (err, user) => {  // Added 'info' parameter to the callback
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({  // Changed status code to 401 (Unauthorized) instead of 400 (Bad Request)
        message: "Unauthorized access",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
}

module.exports = {
  authenticated,
};

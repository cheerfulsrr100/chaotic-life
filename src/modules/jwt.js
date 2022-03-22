const jwt = require('jsonwebtoken');

const createToken = (user) => {
  return jwt.sign({ id: user.id, name: user.name }, 'greekn');
};

module.exports = createToken;

const dotenv = require('dotenv');

module.exports = () => {
  if (process.env.NODE_ENV === 'test') {
    dotenv.config({
      path: '.env.test',
    });
  } else if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
  }
};

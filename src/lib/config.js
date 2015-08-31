var prodConfig = require('./config.json')['production'];
var devConfig = require('./config.json')['development'];

module.exports = function () {
  /** @namespace process.env.NODE_ENV */
  switch (process.env.NODE_ENV) {
    case 'development':
      return devConfig;
    case 'production':
      return prodConfig;
    default:
      return devConfig;
  }
};

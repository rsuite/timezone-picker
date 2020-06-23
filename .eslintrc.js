const path = require('path');

module.exports = {
  extends: [
    '@hypers'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './config/webpack.config.js')
      },
      typescript: {}
    }
  }
};

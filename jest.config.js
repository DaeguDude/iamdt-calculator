/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};

module.exports = config;

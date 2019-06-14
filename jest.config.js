module.exports = {
  setupFiles: ['<rootDir>/src/setupTests.js'],
  transform: { 
    "\\.js$": "<rootDir>/node_modules/babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"]
};

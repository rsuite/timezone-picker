module.exports = api => {
  api.cache(() => process.env.NODE_ENV);

  return {
    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
    plugins: [
      "lodash",
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-transform-proto-to-assign",
      "@babel/plugin-transform-runtime",
      "react-hot-loader/babel",
      "transform-dev",
    ]
  };
};

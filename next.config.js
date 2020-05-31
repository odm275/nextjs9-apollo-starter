require("dotenv").config();

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    // Set the fauna server key in the .env file and make it available at Build Time.
    FAUNA_SERVER_KEY: process.env.FAUNA_SERVER_KEY,
  },
};

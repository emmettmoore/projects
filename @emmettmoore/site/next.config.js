/* eslint-disable no-undef */
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'emmettwmoore-assets.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
};

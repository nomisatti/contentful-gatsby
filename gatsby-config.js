const dotenv = require('dotenv');

dotenv.config();
module.exports = {
    plugins: [
      "gatsby-plugin-typescript",
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId:  '5l99i58tuaov',
          accessToken: 'sQzcZy2ZiBu_8HwDneUBurwkzL6GUrHAcDMCqfqtJXk' ,
        },
      },
    ],

  };
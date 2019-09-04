// Update with your config settings.

require('dotenv').config({path: './'})

module.exports = {


  development: {
    client: 'pg',
    user: 'dnlnyzs',
    password: 'x-pjmCmrCxKQKOQV3sRAA_HazvQPDRtX',
    connection: 'postgres://dnlnyzsx:x-pjmCmrCxKQKOQV3sRAA_HazvQPDRtX@salt.db.elephantsql.com:5432/dnlnyzsx',
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true

  },

 
};

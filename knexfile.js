// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    user: process.env.USENAME,
    password: process.env.PASSWORD,
    connection: process.env.URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true

  },
};

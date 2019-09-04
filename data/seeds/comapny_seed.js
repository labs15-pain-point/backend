const companies = require('../companies.js')




exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert(companies);
    });
};

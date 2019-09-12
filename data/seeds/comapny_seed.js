const companies = require('../companies.js')
const smallCompanies = require('../small_company')




exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert(smallCompanies);
    });
};

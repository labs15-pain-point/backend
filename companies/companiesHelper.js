const db = require('../data/migrations/dbConfig')

module.exports = {
    findAll,
    // findBy,
    // findById
}

function findAll() {
    return db('companies').select('id', 'description', 'rating', 'word_frequency', 'entity_frequency', 'upvotes', 'downvotes', 'bayesrating')
}
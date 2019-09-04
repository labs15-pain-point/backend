const db = require('../data/dbConfig')

module.exports = {
    findAll,
    findById,
    findRandom,
    add,
    remove
}

function findAll() {
    return db('companies').select('id', 'description', 'rating', 'word_frequency', 'entity_frequency', 'upvotes', 'downvotes', 'bayesrating')
}

function findById(id) {
    return db('companies').where({ id }).first()
}

function findRandom() {
    randomNumber = (min, max) => {
            let newNum = Math.random()*(max-min) + min
            let hello = Math.floor(newNum).toString(10)
            console.log(hello)
            return hello
    }
    const id = randomNumber(0,3302)
    return db('companies').where({ id }).first()
}

async function add(company) {
    const [id] = await db('companies').insert(company)
    return findById(id)
}

function remove(id) {
    return db('companies').where({ id }).del()
}
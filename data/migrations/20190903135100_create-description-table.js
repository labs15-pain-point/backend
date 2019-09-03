
exports.up = function(knex) {
  return knex.schema.createTable('companies', tbl => {

    tbl.increments()

    tbl.string('description', 2048)
        .notNullable()

    tbl.integer('rating')

    tbl.integer('upvotes')

    tbl.integer('downvotes')

    tbl.integer('bayesrating')

    tbl.float('word_frequency')

    tbl.float('entity_frequency')

    tbl.timestamps(true, true)

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('companies')
};

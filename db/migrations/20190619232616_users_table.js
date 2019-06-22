
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments()
    tbl.string('username').unique().notNullable()
    tbl.string('email').unique().notNullable()
    tbl.string('name')
    tbl.string('picture')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};

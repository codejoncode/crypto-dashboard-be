exports.up = function(knex, Promise) {
  return knex.schema.createTable("coins", tbl => {
    tbl.increments();
    tbl
      .string("coin")
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {};

exports.up = function(knex, Promise) {
  return knex.schema.createTable("favorites", tbl => {
    tbl.increments();
    //Foreign Key uses  id
    tbl
      .integer("users_id")
      .references("id")
      .inTable("users")
      .onDelete("SET NULL");
    tbl.string("favorites").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("favorites");
};

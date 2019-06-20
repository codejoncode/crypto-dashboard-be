exports.up = function(knex, Promise) {
  return knex.schema.createTable("fav", tbl => {
    tbl.increments();
    tbl.integer("users_id").references("id");
    inTable("users").onDelete("SET NULL");
    tbl.string("fav").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("fav");
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable("favs", tbl => {
    tbl.increments();
    tbl.integer("users_id").references("id");
    inTable("users").onDelete("SET NULL");
    tbl.integer("coins_id").references("id");
    inTable("coins").onDelete("SET NULL");
    tbl.string("fav").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("favs");
};

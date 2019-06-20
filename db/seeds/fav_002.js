
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {users_id: 1, coins_id: 2, fav: "BTC"}
      ]);
    });
};

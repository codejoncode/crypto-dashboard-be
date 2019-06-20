exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favs').del()
    .then(function () {
      // Inserts seed entries
      return knex('favs').insert([
        {users_id: 1, coins_id: 2, fav: "BTC"}
      ]);
    });
};
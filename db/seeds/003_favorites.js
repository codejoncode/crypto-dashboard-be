exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        {users_id : 3, favorites: "BTC ETH XMR DOGE"}
      ]);
    });
};

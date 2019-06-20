
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {username: "j124", email: "j123@email.com", name: "j 124"},
        {username: "we222", email: "we222@email.com", name: "we 222"},
        {username: "onemore", email: "onemore@email.com", name: "one more"}
      ]);
    });
};

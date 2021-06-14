
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {name: 'Mark Twain'},
        {name: 'Dante Alighieri'},
        {name: 'Cicero'}
      ]);
    });
};

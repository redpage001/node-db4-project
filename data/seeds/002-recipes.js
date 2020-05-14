
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: "Breakfast Sandwiches" },
        { recipe_name: "PB&J Sandwiches" },
        { recipe_name: "Club Sandwiches" }
      ]);
    });
};

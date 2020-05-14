
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 2, unit: "slices"},
        { recipe_id: 1, ingredient_id: 2, quantity: 1},
        { recipe_id: 1, ingredient_id: 3, quantity: 3, unit: "slices"},
        { recipe_id: 2, ingredient_id: 1, quantity: 2, unit: "slices"},
        { recipe_id: 2, ingredient_id: 4, quantity: 4, unit: "tbs"},
        { recipe_id: 2, ingredient_id: 5, quantity: 4, unit: "tbs"},
        { recipe_id: 3, ingredient_id: 1, quantity: 2, unit: "slices"},
        { recipe_id: 3, ingredient_id: 6, quantity: 3, unit: "slices"},
        { recipe_id: 3, ingredient_id: 7, quantity: 2, unit: "leaves"},
        { recipe_id: 3, ingredient_id: 8, quantity: 2, unit: "slices"},
        { recipe_id: 3, ingredient_id: 3, quantity: 3, unit: "slices"},
        { recipe_id: 3, ingredient_id: 9, quantity: 1, unit: "tbs"}
      ]);
    });
};

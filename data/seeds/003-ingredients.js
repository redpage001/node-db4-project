
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: "White Bread" },
        { ingredient_name: "Egg" },
        { ingredient_name: "Bacon" },
        { ingredient_name: "Peanut Butter" },
        { ingredient_name: "Strawberry Jelly" },
        { ingredient_name: "Deli Sliced Chicken" },
        { ingredient_name: "Iceberg Lettuce" },
        { ingredient_name: "Tomato" },
        { ingredient_name: "Mayonnaise" },
      ]);
    });
};

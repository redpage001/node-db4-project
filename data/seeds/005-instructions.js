
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, step_number: 1, instructions: "Fry bacon until crispy and put aside while you fry the egg."},
        { recipe_id: 1, step_number: 2, instructions: "Fry the egg over a medium heat in the fat rendered from the bacon to your desired runniness."},
        { recipe_id: 1, step_number: 3, instructions: "Toast bread and layer your bacon with the egg on top and top with the top piece of toast."},
        { recipe_id: 2, step_number: 1, instructions: "Take one of your pieces of bread and slather 4 tbs of peanut butter on it."},
        { recipe_id: 2, step_number: 2, instructions: "Take the other piece of bread and slather 4 tbs of strawberry jelly on it."},
        { recipe_id: 2, step_number: 3, instructions: "Once both pieces of bread are sufficiently covered, bring the two pieces together."},
        { recipe_id: 3, step_number: 1, instructions: "Fry your bacon until it is crispy and put it aside as you assemble the rest of your sandwich."},
        { recipe_id: 3, step_number: 2, instructions: "Toast your bread and slather the tbs of mayonnaise on the bottom piece of toast."},
        { recipe_id: 3, step_number: 3, instructions: "Assemble the sandwich, starting with the chicken slices and bacon and topping them with the lettuce and tomato before capping with the top slice of toast."}
      ]);
    });
};

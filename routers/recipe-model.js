const db = require("../data/dbConfig");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredient')
             .join('recipes', 'recipes.id', '=', 'recipe_ingredient.recipe_id')
             .join('ingredients', 'ingredients.id', '=', 'recipe_ingredient.ingredient_id')
             .select('recipes.recipe_name', 'ingredients.ingredient_name', 'recipe_ingredient.quantity', 'recipe_ingredient.unit')
             .where({ 'recipe_ingredient.recipe_id': recipe_id })
}

function getInstructions(recipe_id){
    return db('instructions')
            .join('recipes', 'recipes.id', '=', 'instructions.recipe_id')
            .select('recipes.recipe_name', 'instructions.step_number', 'instructions.instructions')
            .where({ 'instructions.recipe_id': recipe_id })
            .orderBy('instructions.step_number')
}
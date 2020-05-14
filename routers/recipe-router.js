const express = require("express");

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json({ data: recipes })
    })
    .catch(error => {
        console.log({ error })
        res.status(500).json({ message: "Error retrieving list of recipes." })
    })
})

router.get('/:id/shoppinglist', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
    .then(shoppingList => {
        if(shoppingList){
            res.status(200).json({ data: shoppingList })
        } else {
            res.status(404).json({ message: "The recipe with specified ID was not found." })
        }
    })
    .catch(error => {
        console.log({ error })
        res.status(500).json({ message: "Error retrieving shopping list for recipe with specified ID." })
    })
})

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
    .then(instructions => {
        if(instructions){
            res.status(200).json({ data: instructions })
        } else {
            res.status(404).json({ message: "The recipe with specified ID was not found." })
        }
    })
    .catch(error => {
        console.log({ error })
        res.status(500).json({ message: "Error retrieving list of instructions for recipe with specified ID." })
    })
})

module.exports = router;
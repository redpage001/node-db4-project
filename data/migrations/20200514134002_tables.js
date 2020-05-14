
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("recipe_name", 255).notNullable();
    })

    .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("ingredient_name", 255).notNullable().unique();
    })

    .createTable("recipe_ingredient", tbl => {
        tbl.increments();
        tbl.interger("recipe_id")
            .unsigned()
            .notNullable()
            .references("recipes.id")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
        
        tbl.interger("ingredient_id")
            .unsigned()
            .notNullable()
            .references("ingredients.id")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");

        tbl.interger("quantity", 255).notNullable();
    })

    .createTable("instructions", tbl => {
        tbl.increments();
        tbl.interger("step_number", 255).unsigned().notNullable();
        tbl.text("instructions").notNullable();
        
        tbl.interger("recipe_id")
            .unsigned()
            .notNullable()
            .references("recipes.id")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipe_ingredient")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};

exports.up = async function(knex) {
  await knex.schema.createTable("items", table => {
    table.increments();
    table.text("name").notNullable();
    table
      .text("durability")
      .notNullable()
      .integer(0 > 20);
    table
      .text("enhancement")
      .notNullable()
      .integer(0 > 100);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("hobbits");
};

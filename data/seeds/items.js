exports.seed = async function(knex) {
  await knex("items").truncate();
  await knex("items").insert([
    { id: 1, name: "UpOne Enahancements", enhancement: 18, durability: 47 },
    {
      id: 2,
      name: "Above&Beyond Enahancements",
      enhancement: 7,
      durability: 98
    },
    {
      id: 3,
      name: "Enhanced Enahancements",
      enhancement: 12,
      durability: 21
    }
  ]);
};

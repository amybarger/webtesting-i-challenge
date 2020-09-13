const db = require("../data/config");

function find() {
  return db("items");
}

function findById(id) {
  return db("items")
    .where({ id })
    .first();
}

async function create(data) {
  const [id] = await db("items").insert(data);
  return findById(id);
}

async function update(id, data) {
  await db("items")
    .where({ id })
    .update(data);
  return findById(id);
}

function remove(id) {
  return db("items")
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  create,
  update,
  remove
};

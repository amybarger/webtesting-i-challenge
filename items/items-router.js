const express = require("express");
const Items = require("./items-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await Items.find());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const item = await Items.findById(req.params.id);
    if (!item) {
      return res.status(404).json({
        message: "Hobbit not found"
      });
    }

    res.json(item);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const item = await Items.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

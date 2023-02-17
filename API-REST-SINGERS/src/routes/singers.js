const express = require("express");
const singersSchema = require("../models/singers");

const router = express.Router();

// create singer
router.post("/singers", (req, res) => {
  const singers= singersSchema(req.body);

  singers
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all singers
router.get("/singers", (req, res) => {
  singersSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a singers
router.get("/singers/:id", (req, res) => {
  const { id } = req.params;
  singersSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a singer
router.delete("/singers/:id", (req, res) => {
  const { id } = req.params;
  singersSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/singers/:id", (req, res) => {
  const { id } = req.params;
  const { name, type, country } = req.body;
  singersSchema
    .updateOne({ _id: id }, { $set: { name, type, country } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;

const express = require("express");
const singer = require("../models/singers");

const router = express.Router();

// create singers
router.post("/singers", (req, res) => {
  const singer = singer(req.body);
  singer
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all singers
router.get("/singers", (req, res) => {
  singer.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a singer
router.get("/singers/:id", (req, res) => {
  const { id } = req.params;
  singer.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a singer
router.delete("/singers/:id", (req, res) => {
  const { id } = req.params;
  singer.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a singer
router.put("/singers/:id", (req, res) => {
  const { id } = req.params;
  const newsinger = req.body;
  singer.findByIdAndUpdate(id, newsinger)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;

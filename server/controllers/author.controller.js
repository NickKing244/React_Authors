const Author = require("../models/author.model");

const addNewAuthor = (req, res) => {
  const { body } = req;
  Author.create({
    name: body.name,
  })
    .then((newAuthor) => res.json({ newAuthor }))
    .catch((err) => res.status(400).json(err));
};

const getAllAuthors = (req, res) => {
  Author.find()
    .sort({ name: "ascending" })
    .then((allAuthors) => res.json(allAuthors))
    .catch((err) => res.status(400).json(err));
};

const deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.authorId })
    .then((deletedAuthor) => res.status(200).send("Deleted Author"))
    .catch((err) => res.status(400).json(err));
};

const updateAuthor = (req, res) => {
  console.log(req.body);
  Author.findOneAndUpdate({ _id: req.params.authorId }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => res.json(updatedAuthor))
    .catch((err) => res.status(400).json(err));
};

const getOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.authorId })
    .then((oneAuthor) => res.json(oneAuthor))
    .catch((err) => console.log(err));
};

module.exports = {
  addNewAuthor,
  getAllAuthors,
  deleteAuthor,
  updateAuthor,
  getOneAuthor,
};

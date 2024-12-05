import express from "express";
import { Book } from "../models/bookModels.js";

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send("All fields are required");
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error);
  }
});

// get all books
router.route("/").get(async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).send({
      count: books.length,
      books: books,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

// get one book by id
router.route("/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.find({ _id: id });
    return res.status(200).send(book);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

//Route for update a book
router.route("/:id").put(async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send("All fields are required");
    }
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    return res.status(200).send({ message: "Update Success" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
});

// Route for delete a book
router.route("/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    } else {
      return res.status(200).send({ message: "Delete Success" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
});

export default router;

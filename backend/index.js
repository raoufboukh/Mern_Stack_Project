import express from "express";
import { PORT, DbUrl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("Hello World");
});

app.post("/books", async (req, res) => {
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
app.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).send({
      count: books.length,
      books: [...books],
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});


// get one book by id
app.get("/books/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const book = await Book.find({_id: id});
    return res.status(200).send(book);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});


mongoose
  .connect(DbUrl)
  .then(() => {
    console.log("Connected to the database");
    app.listen(5555, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send({ message: err.message });
  });

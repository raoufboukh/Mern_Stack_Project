import express from "express";
import { PORT, DbUrl } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("Hello World");
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
  });

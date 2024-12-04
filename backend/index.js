import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("Hello World");
});

app.listen(5555, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from "express";
import { PORT, DbUrl } from "./config.js";
import mongoose from "mongoose";
import routes from "./routes/routes.js";

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   console.log(req);
//   res.status(200).send("Hello World");
// });

app.use("/books", routes);

mongoose
  .connect(DbUrl)
  .then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    // res.status(500).send({ message: err.message });
  });

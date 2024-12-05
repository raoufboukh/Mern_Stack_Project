import express from "express";
import { PORT, DbUrl } from "./config.js";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import cors from 'cors';

const app = express();

app.use(express.json());

// Middelware for handling CORS POLICY
// option 1: allow all origins with default of cors(*)
app.use(cors());

// option 2: allow custom origins
// app.use(cors({
//   origin:'',
//   methods:['GET','POST','PUT','DELETE'],
//   allowedHeaders: ['Content-Type']
// }))

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

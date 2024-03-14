import * as dotenv from "dotenv";
// loading .env file
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import testRouter from "./router/testRouter.js";
import fakeRouter from "./router/fakeRouter.js";

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

// console.log("provess.env.MONGO_URI", process.env.MONGO_URI);
// const port = process.env.PORT || 5001;
// app.listen(port, () => {
//   console.log("Server is running on port !!! " + port);
// });

const port = process.env.PORT || process.env.MY_PORT;
mongoose
  .connect(process.env.MONGO_URI, { family: 4 })
  .then(() => {
    app.listen(port, () => {
      console.log(
        "Connection to MongoDB established, and server is running on port wohooo " +
          port
      );
    });
  })
  .catch((err) => console.log(err));

app.use("/api/test", testRouter);
//1st : create and entry point for all the routes related with that resource
app.use("/api/fake", fakeRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

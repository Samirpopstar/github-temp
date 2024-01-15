import express from "express";
import getRouter from "./router.js";

const app = express();
const port = 5500;

app.use("/hello", getRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Me Hello samir");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

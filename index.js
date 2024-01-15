import express from "express";
import getRouter from "./router.js";

const app = express();
const port = 5500;

app.use("/hello", getRouter);

app.get("/", (req, res) => {
  res.send("Hello Worldsadasdasdasd");
});

app.get("/about", (req, res) => {});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

import express from "express";

const app = express();
const port = 5500;

app.get("/", (req, res) => {
  res.send("Hello Worldddddd");
});

app.listen(`Server started on port ${port}`);

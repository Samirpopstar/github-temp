import express from "express";

const router = express.Router();

router.route("/go").get((req, res) => {
  res.send("You can go");
});

export default router;

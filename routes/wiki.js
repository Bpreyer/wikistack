const express = require("express");
const router = express.Router();
const { addPage } = require("../views");
// const html = require("html-template-tag");

router.get("/", (req, res) => {
  res.send("what is going on");
});

router.post("/", (req, res) => {
  res.send("got to POST /wiki");
});

// router.get("/add", (req, res) => {
//   res.send(addPage());
// });

module.exports = router;

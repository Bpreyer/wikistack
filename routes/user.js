const express = require("express");
const router = express.Router();
const { userList } = require("../views");
const { userPages } = require("../views");


router.get("/", (req, res) => {
  res.send(userPages());
});

router.post("/", (req, res) => {
  res.send("got to POST /wiki");
});

router.get("/add", (req, res) => {
  res.send(userList());
});


module.exports = router;

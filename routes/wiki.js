const express = require("express")
const router = express.Router()
const { addPage } = require("../views");
// const html = require("html-template-tag");


router.get( '/', (req, res) => {
  res.send ('got to GET /wiki/');

});

router.post( '/', (req, res) => {
  res.send ('got to POST /wiki/');

});

router.get( '/add', async (req, res, next) => {
  try {
    res.send (addPage());
  } catch(error) { next(error) }





});




module.exports = { router }

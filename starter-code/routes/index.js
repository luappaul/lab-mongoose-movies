const express = require("express");
const router = express.Router();
const importToMango = require("../config/mongoConnect");
const celebrities = require("../bin/seeds");
const viewCelebrities = require("../routes/celebrities");

///////////////////////
// Home Page
///////////////////////

router.get("/", (req, res, next) => {
  res.render("index");
});

// router.get("/celebrities", (req, res, next) => {
//   res.render("../views/celebrities/index.hbs");
// });

///////////////////////
// MongoDb initiation
///////////////////////

// importToMango(celebrities);

module.exports = router;

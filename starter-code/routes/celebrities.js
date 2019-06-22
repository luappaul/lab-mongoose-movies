const celebrities = require("../models/celebrity");
const express = require("express");
const router = express.Router();

router.get("/celebrities", (req, res) => {
  console.log("yes");
  celebrities
    .find()
    .then(resultat => {
      res.render("celebrities/index", { resultat });
    })
    .catch(err => {
      res.render("celebrities/index", { err: "error on listing" });
    });
});

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res) => {
  console.log(req.body);
  const { name, occupation, catchPhrase } = req.body;
  celebrities
    .create({
      name,
      occupation,
      catchPhrase
    })
    .then(res => {
      res.redirect("/");
    })
    .catch(err => {
      res.redirect("/");
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  celebrities
    .findById(req.params.id)
    .then(resultat => {
      console.log("get Id");
      res.render("celebrities/celebritiesDetails", { resultat });
    })
    .catch(err => {
      console.log("error");
    });
});

router.post("/celebrities/:id/delete", (req, res) => {
  console.log(req.params);
  celebrities
    .findByIdAndDelete(req.param.id)
    .then(resultat => {
      console.log("find and delete", resultat);
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("error");
      res.redirect("/");
    });
});

module.exports = router;

const celebrity = require("../models/celebrity");

function importToMango(arr) {
  celebrity
    .insertMany(arr)
    .then(res => {
      console.log("db is loaded");
    })
    .catch(err => {
      console.log("db isn't loaded");
    });
}

module.exports = importToMango;

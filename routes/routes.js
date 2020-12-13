var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        res.render("index", {
            burger_data: data})
    })
})

router.post("/api/data", function (req, res) {
     burger.create(["Name", "Eaten"])
} )

module.exports = router
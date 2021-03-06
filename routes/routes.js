var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        res.render("index", {
            burger_data: data})
    })
})

router.post("/burgers/create", function (req, res) {
     burger.create(["burger_name", "devoured"], [req.body.name, req.body.eaten], function(result) {
         res.json({id:result.insertId})
     }
     )
} )

router.put("/api/data/:id", function (req, res){
    // burger.update req.params.id
})

router.delete("/api/data/:id", function (req, res){

});
module.exports = router
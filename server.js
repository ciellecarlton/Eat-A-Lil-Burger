var express = require ("express")
var PORT = 8000 || process.env.PORT 
var app = express()
app.use(express.static("public"));


app.use(express.urlencoded({extended:true}));
app.use(express.json());

var handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var routes = require ("./routes/routes.js");
app.use(routes)

app.listen (PORT, function(){
    console.log("app listening on "+ PORT)
    
})                 
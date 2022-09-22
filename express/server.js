const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
})

app.get("/about", function(req, res){
    res.send("<h2>My name is Wigarfield</h2><br><a href='/contact' target='_blank'>Contact</a>")
})

app.get("/contact", function(req, res){
    res.send("Contact Me: wigarwijaya@gmail.com")
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
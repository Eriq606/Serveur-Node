var express = require("express")
var app=express();

function start(response){
    console.log("Le gestionnaire 'start' est appelé.");
    setTimeout(function(){
        response.send("Bonjour Start");
    }, 10000);
}
function upload(response){
    console.log("Le gestionnaire 'upload' est appelé.");
    response.send("Bonjour Upload - Rafraîchi");
}
app.get("/", function(req, res){
    start(res);
}).get("/start", function(req, res){
    start(res);
}).get("/upload", function(req, res){
    upload(res);
}).use(function(req, res){
    res.setHeader("Content-Type", "text/plain");
    res.send(404, "Page not found");
}).listen(3000, function(){
    console.log("App listening on port 3000!");
});
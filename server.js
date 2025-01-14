var http = require("http");

function start(){
    function onRequest(request, response){
        console.log("Requête reçue.");
        response.writeHead(200, {"content-type":"text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Démarrage du serveur.");
}

exports.start=start;
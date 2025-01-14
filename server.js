var http=require("http");
var url=require("url");

function start(route){
    function onRequest(request, response){
        var pathname=url.parse(request.url).pathname;
        console.log("Requête reçue pour le chemin "+pathname+".");
        route(pathname);
        response.writeHead(200, {"content-type":"text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Démarrage du serveur.");
}

exports.start=start;
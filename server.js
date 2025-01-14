var http=require("http");
var url=require("url");

function start(route, handle){
    function onRequest(request, response){
        var pathname=url.parse(request.url).pathname;
        console.log("Requête reçue pour le chemin "+pathname+".");
        response.writeHead(200, {"content-type":"text/plain"});
        var content=route(handle, pathname);
        response.write(content);
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Démarrage du serveur.");
}

exports.start=start;
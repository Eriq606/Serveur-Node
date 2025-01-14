var exec=require("child_process").exec;

function start(response){
    console.log("Le gestionnaire 'start' est appelé.");
    setTimeout(function(){
        response.writeHead(200, {"content-type":"text/plain"});
        response.write("Bonjour Start");
        response.end();
    }, 10000);
}
function upload(response){
    console.log("Le gestionnaire 'upload' est appelé.");
    response.writeHead(200, {"content-type":"text/plain"});
    response.write("Bonjour Upload");
    response.end();
}
exports.start=start;
exports.upload=upload;
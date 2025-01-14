function start(){
    console.log("Le gestionnaire 'start' est appelé.");
    return "Bonjour Start";
}
function upload(){
    console.log("Le gestionnaire 'upload' est appelé.");
    return "Bonjour Upload";
}
exports.start=start;
exports.upload=upload;
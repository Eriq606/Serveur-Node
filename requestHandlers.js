function start(){
    console.log("Le gestionnaire 'start' est appelé.");
    function sleep(milliSeconds){
        var startTime=new Date().getTime();
        while(new Date().getTime()<startTime+milliSeconds);
    }
    sleep(10000);
    return "Bonjour Start";
}
function upload(){
    console.log("Le gestionnaire 'upload' est appelé.");
    return "Bonjour Upload";
}
exports.start=start;
exports.upload=upload;
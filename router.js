function route(handle, pathname){
    console.log("Début du traitement de l'URL "+pathname+".");
    if(typeof handle[pathname] === "function"){
        handle[pathname]();
    }else{
        console.log("Aucun gestionnaire associé à "+pathname+".");
    }
}

exports.route=route;
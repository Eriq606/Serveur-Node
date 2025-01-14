function route(handle, pathname){
    console.log("Début du traitement de l'URL "+pathname+".");
    if(typeof handle[pathname] === "function"){
        return handle[pathname]();
    }else{
        console.log("Aucun gestionnaire associé à "+pathname+".");
        return "404 Non trouvé";
    }
}

exports.route=route;
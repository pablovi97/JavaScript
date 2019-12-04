function eventos() {

    if (location.search) {
        // Estoy recibiendo parámetros por URL
        console.log(location.search);
        var todo = decodeURIComponent(location.search).split('?');
        var info = todo[1].split('&');
        info.forEach(v => { var data = v.split('='); console.log(data[0], data[1]) });

        console.log("---------------------")
        var url = new URL(location.href);
        
        console.log("El valor de a es:", url.searchParams.get('a'));
        for (let k of url.searchParams.keys()) {
            console.log(k, url.searchParams.get(k));
            if (document.getElementById(k)) {
                document.getElementById(k).value = url.searchParams.get(k);
            }
        }



    }
    else {
        console.log("No recibo nada");
    }


}
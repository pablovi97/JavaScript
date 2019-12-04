
/*
const CONFIG = {
    canvas_id: "selva",
    selva: document.getElementById(this.canvas_id),
    ctx: this.selva.getContext('2d'),
    PI2: 2 * Math.PI,
    width: this.selva.width,
    height: this.selva.height,
    num_plantas: 34,
    num_fosiles: 12,

}

/*
form:
 - label
 - fieldset
 - legend

 - button
 - select - option
 - textarea
 - input: password, number, submit, text, radio, checkbox, reset, button,
 file, hidden, color, tel, search, email, range, date, week, month, url,
 time, datetime

 - datalist
 - optgroup
 - keygen
 - progress
 - output
 - meter
 



*/

function gid(x) {
    return document.getElementById(x);
}
function cogeElem() {
    
    //form:
    
    


    var linea = 23;
    console.log(++linea, document.getElementById('pedro_id'));
    console.log(++linea, document.getElementsByTagName('form')[0]);
    console.log(++linea, document.getElementsByName('pedro_name')[0]);
    console.log(++linea, document.querySelector('form'));
    console.log(++linea, document.querySelectorAll('form')[0]);
    console.log(++linea, document.querySelectorAll('#pedro_id')[0]);
    console.log(++linea, document.querySelector('#pedro_id'));
    console.log(++linea, document.pedro_id);
    console.log(++linea, document.pedro_name);
    console.log(++linea, document['pedro_id']);
    console.log(++linea, document['pedro_name']);
    ++linea;
    console.log(++linea, document.forms['pedro_name']);
    console.log(++linea, document.forms['pedro_id']);
    ++linea;
    console.log(++linea, document.forms.pedro_id);
    console.log(++linea, document.forms.pedro_name);
    console.log(++linea, document.forms[0]);
    ++linea;
    console.log(++linea, document.forms.pedro_id.input_id);
    console.log(++linea, document.forms.pedro_name.input_name);
    console.log(++linea, document.forms[0][0]);
    console.log(++linea, document.forms[0].input_id);
    console.log(++linea, document.forms.pedro_name['input_id']);
    console.log(++linea, document.forms.pedro_id[0]);
    ++linea;
    console.log(++linea, document.forms[0].elements.input_id);
    console.log(++linea, document.forms.pedro_name.elements['input_id']);
    console.log(++linea, document.forms.pedro_id.elements[0]);
    console.log(++linea, document.getElementById('input_id'));






    /*console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );
    console.log(++linea, );*/


/*
//    const lista = "documentElement,doctype,head,body,title,charset,url,domain,cookie,baseURI";


//    CONFIG.ctx 

    //for (valor of lista.split(",")) {
    //    console.log(valor, document[valor]); 
    //}
//    document.designMode = "off";
    //document.execCommand('selectAll');

    function impr() {
        console.log(document.readyState);    
    }

    function focus() {
        console.log(document.hasFocus());
    }
    
    //setInterval(focus,100);

    console.log("Nº de enlaces: " + document.links.length);
    console.log("Nº de anchors: " + document.anchors.length);
    for (let a of document.links) {
        console.log(a);
    }

    /*

    HTMLCollections en document

    .links: <a href="..."> o <area href="..."></area>
    .anchors: <a name="..."></a>
    .scripts: <script></script>
    .applets: <applet></applet>
    .embeds: <embed></embed>
    .images: <img src="...">
    .forms: <form></form>
    */

    //console.log(document.activeElement.style.border="2px solid red");
   
    
    











/*



const CONFIG = {
    selva: document.getElementById('selva'), 
    ctx: this.selva.getContext('2d'),
    width: this.selva.width,
    height: this.selva.height,
    PI2: Math.PI * 2,
    pintarCirculo(a,b,c,e) {
        this.ctx.arc
    }
}


class A {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

class B extends A { 
    constructor(c, d, ...param) {
        super(...param)
        this.c = c;
        this.d = d;
    }
    pintar() {
        CONFIG.ctx.fillStyle = "red";
        CONFIG.ctx.fillRect(0,0, 50, 50);
    }
}



function cogeElem() {   

    

    function mensaje(x) {
        console.log("Hola", x);
    }
    // let mensajito = setInterval(mensaje, 2000, new Date());
    // alert("Parar");
    // clearInterval(mensajito);

    let mensajito = setTimeout(mensaje, 5000, new Date());
    console.log("XXXX");
    //alert("Parar");
    clearTimeout(mensajito);
    console.log("Ya está parado");



    //setTimeout(f, t)
    








    /* 
//let selva = document.getElementById('selva');
    //let ctx = selva.getContext('2d');
    console.log(window);
    console.log(CONFIG.ctx);
    let objB = new B(1,2,3,4);
    objB.pintar();


    /*

    close();

    //var newWin = open(prompt("Indica la ventana a abrir"));
    //var newWin = open('http://www.google.es', '', 'left=400,top=400,menubar=no,width=500,height=500,resizable=no,scrollbars=no,status=no');
    //var newWin = open('http://www.marca.com', '', );
    //var newWin = open('http://www.xataka.com', '', );
    //var newWin = open('http://www.apache.org', '', );
    //if (confirm("Voy a cerrar la ventana")) {
    //    newWin.close();
    //}
    //history.back();
    //history.forward();
    //history.go(-3);

    console.log("HREF: ", location.href);
    console.log("PROT: ", location.protocol);
    console.log("HOST: ", location.host);
    console.log("HOSTNAME: ", location.hostname);
    console.log("PORT: ", location.port);
    console.log("ORIGIN: ", location.origin);
    console.log("PATHNAME: ", location.pathname);
    console.log("HASH: ", location.hash);
    console.log("SEARCH: ", location.search);

    url = "asdfsafd";
    location.assign(url); <==> location.replace(url) >==> location.href = url
    location.reload();
    

    location.href = "http://www.google.com";


    /*
    console.log("AppName", navigator.appName);
    console.log("AppCodeName", navigator.appCodeName);
    console.log("AppVersion", navigator.appVersion);
    console.log("battery", navigator.battery);
    console.log("language", navigator.language );
    console.log("mimeTypes", navigator.mimeTypes );
    */

    /*
    console.log("Width", screen.width);
    console.log("Height", screen.height);
    console.log("AvailWidth", screen.availWidth);
    console.log("AvailHeight", screen.availHeight);
    console.log("colorDepth", screen.colorDepth)
    console.log("pixelDepth", screen.pixelDepth)
    */

    // console.log(newWin.closed);




/*    
    var alpacaCONFIG = {};
    alpacaCONFIG.posicion = 34;
    alpacaCONFIG.edad = 53;
    alpacaCONFIG.masa = 63;
    
    console.time("Reloj");
    var aaaa1;
    let aaaa2;
    const aaaa3 = 5;
    function aaaa4() {};
    aaaa5 = 534;

    a = {dsf: 34534, sdf: 3434, gsdfgdf: 64536, dsfs: 53453};
    console.table(a);

    console.count("A");
    console.count("B");
    console.count("A");
    console.count("B");

    console.trace();
    

    console.debug("Debug");
    console.log("Log");
    console.info("Info");
    console.warn("Warn");
    console.error("Error");
    console.group("Función X");
    console.log("Estoy aquí");
    console.log(aaaa5);
    console.groupCollapsed("Ahora entro en el bucle");
    console.log("Estoy aquí fuera");
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
    console.groupEnd();
   
    console.log("Estoy aquí fuera");

    console.timeEnd("Reloj");
    console.timeStamp();
    console.dir(aaaa5);
  
    


    /*

    alert("Hola!");
    var x = prompt("Introduce un número:");
    alert("El número es " + x);
    var respuesta = confirm("¿Está usted seguro?");
    alert("Su respuesta fue " + respuesta);

    console.log();
    


    Math.PI
    window.parseInt()

    /*
    var parrafo = document.getElementById("presentacion");

    if (parrafo) {
        console.log("iH", parrafo.innerHTML);
        console.log("oH", parrafo.outerHTML);
        console.log("iT", parrafo.innerText);
        console.log("oT", parrafo.outerText);
        console.log("tC", parrafo.textContent);

    }

    parrafo.innerHTML = "Hola don <strong>Pepito</strong>";
    parrafo.outerHTML = '<ul><li>Hola don José</li><ul>';

    var mensaje = "Hola don Pepito, hola don José";
    var palabras = mensaje.split(" ");

    
    var lista = document.getElementById('milista1');
    /*
    if (lista) {
        Array.from(lista.getElementsByTagName("li")).forEach((x, i) => 
        x.outerHTML = "<p><strong>" + palabras[i] + "</strong></p>");
    }
     

    if (lista) {
        var elems = lista.getElementsByTagName("li");
        var i = 0;
        for (x of elems) {
            x.outerHTML = "<p><strong>" + palabras[i++] + "</strong></p>";
        }
    }

/*
    
    var elem = document.getElementById("milista1");

    if (elem) {
        elem.style.border =  "1px dashed red";
    }

    var items = document.getElementsByTagName("li");
    console.log("Nº de elementos", items.length);

    Array.from(items).forEach(x => x.style.backgroundColor = "red");
    for (let x of items) {
        x.style.backgroundColor = "blue";
    }
    console.log("NodeList", items instanceof NodeList);
    console.log("HTMLCollection", items instanceof HTMLCollection);

    Array.from(document.getElementById("milista1")
            .getElementsByClassName("impar")).forEach(x =>
        x.style.backgroundColor = "purple");

    Array.from(document.getElementsByName("pepe")).forEach(x => x.style.backgroundColor = "yellow");

/*
    document.getElementById("milista2").getElementsByTagName("li")
    Array.from(elem.getElementsByTagName("li")).forEach((x, i) => {
        if (i % 2 == 1) {
            x.style.backgroundColor = "pink";
        }});
    document.querySelectorAll("#milista2 > li").forEach(x => x.style.backgroundColor = "yellow")



    alert("JS Funciona!!");
*/
}
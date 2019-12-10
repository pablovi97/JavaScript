"use strict"
function cosa() {

    class Config {
        constructor(canvas_id) {
            this.cans = document.getElementById(canvas_id);
            this.anchoCanvas = this.cans.width;
            this.altoCanvas = this.cans.height;
            this.PI2 = 2 * Math.PI;
            this.lienzo = document.getElementById("myCanvas");
            this.contexto = this.lienzo.getContext("2d");
            this.seres = new Set();
            this.maxseres = 10000;
            this.maxmasa = 30;
            this.maxmasaplanta = 0;
            this.masamaxherviboro = 0;
            this.maxmasacarnivoro = 0;
            this.masiniplanta = 0;
            this.ponerherviboro = document.getElementById("ponerherviboro");
            this.ponerplanta = document.getElementById("ponerplanta");
            this.ponercarnivoro = document.getElementById("ponercarni");
            this.quitarplanta = document.getElementById("quitarplanta");
            this.quitarcarnivoro = document.getElementById("quitarcarnivoro");
            this.quitarherviboro = document.getElementById("quitarherviboro");
            this.guardarenstorage = document.getElementById("guardar");
            this.chkher = document.forms[1];
            this.chkcar = document.forms[2];
            this.chekslogs = document.forms[3];
            this.log = document.getElementById("lista");
            this.velgen = 1;
            this.velcreplanta = 1;
            this.timer = 0;
            this.time = 0;
            this.date = document.getElementById("date");
            this.btncrearfosil = document.getElementById("crearfosil");

            this.tiempoSimulacion = 0;

            this.tmpDate = Date.now();     //  Wed Oct 16 2013 12:37:29 GMT+0200
            this.now = this.tmpDate.getDate;

        }


        dibujarSerVivo() {

            this.seres.forEach(obj => {
                if (obj.masa > 0) {
                    if (this.contexto) {
                        var X = obj.punto.x;
                        var Y = obj.punto.y;
                        var r = obj.masa;
                        this.contexto.beginPath();
                        this.contexto.fillStyle = obj.color;
                        this.contexto.lineWidth = 5;
                        this.contexto.arc(X, Y, r, 0, this.PI2);
                        this.contexto.fill();
                        this.contexto.stroke();

                    }


                }


            });
        }

        estadisticas() {
            console.log("estadisticas");
            let plantas = document.getElementById("pl");
            let lispl = plantas.getElementsByTagName("td");
            let herviborosM = document.getElementById("hvm");
            let lishvm = herviborosM.getElementsByTagName("td");
            let herviborosH = document.getElementById("hvh");
            let lishvh = herviborosH.getElementsByTagName("td");
            let carnivorosM = document.getElementById("crm");
            let liscrm = carnivorosM.getElementsByTagName("td");
            let carnivorosH = document.getElementById("crh");
            let liscrh = carnivorosH.getElementsByTagName("td");



            let vivospl = 0;
            let masapl = 0;
            let muertospl = 0;
            let vivoshvm = 0;
            let masahvm = 0;
            let velmdhvm = 0;
            let muertoshvm = 0;
            let vivoshvh = 0;
            let masahvh = 0;
            let velmdhvh = 0;
            let muertoshvh = 0;
            let vivoscrm = 0;
            let masacrm = 0;
            let velmdcrm = 0;
            let muertoscrm = 0;
            let vivoscrh = 0;
            let masacrh = 0;
            let velmdcrh = 0;
            let muertoscrh = 0;
            this.seres.forEach(obj => {

                if (obj instanceof Planta) {
                    if (obj.masa < 0) {
                        muertospl++;
                        console.log("plantas muertas " + muertospl)
                        lispl[0].dataset.kill = muertospl;
                        lispl[0].innerText = muertospl;
                    } else {
                        masapl += obj.masa;
                        vivospl++;
                        lispl[1].dataset.live = vivospl;
                        lispl[1].innerText = vivospl;
                        lispl[2].dataset.mas = masapl / lispl[1].dataset.live;
                        lispl[2].innerText = masapl / lispl[1].dataset.live;

                    }


                } else if (obj instanceof Herviboro) {
                    if (obj.sexo == true) {
                        if (obj.masa < 0) {
                            console.log("herviboros muertos " + muertoshvm)
                            muertoshvm++;
                            lishvm[0].dataset.kill = muertoshvm;
                            lishvm[0].innerText = muertoshvm;
                        } else {
                            masahvm += obj.masa;
                            velmdhvm += (obj.velocidad_mov.x + obj.velocidad_mov.y);
                            vivoshvm++;
                            lishvm[1].dataset.live = vivoshvm;
                            lishvm[1].innerText = vivoshvm;
                            lishvm[2].dataset.mas = masahvm / lishvm[1].dataset.live;
                            lishvm[2].innerText = masahvm / lishvm[1].dataset.live;
                            lishvm[3].dataset.vel =Math.floor( Math.abs(velmdhvm / lishvm[1].dataset.live));
                            lishvm[3].innerText = Math.floor( Math.abs(velmdhvm / lishvm[1].dataset.live));

                        }
                    } else {
                        if (obj.masa < 0) {
                            muertoshvh++;
                            lishvh[0].dataset.kill = muertoshvh;
                            lishvh[0].innerText = muertoshvh;
                        } else {
                            masahvh += obj.masa;
                            velmdhvh += (obj.velocidad_mov.x + obj.velocidad_mov.y);
                            vivoshvh++;
                            lishvh[1].dataset.live = vivoshvh;
                            lishvh[1].innerText = vivoshvh;
                            lishvh[2].dataset.mas = masahvh / lishvh[1].dataset.live;
                            lishvh[2].innerText = masahvh / lishvh[1].dataset.live;
                            lishvh[3].dataset.vel =Math.floor( Math.abs(velmdhvh / lishvh[1].dataset.live));
                            lishvh[3].innerText =Math.floor( Math.abs(velmdhvh / lishvh[1].dataset.live));

                        }

                    }

                } else if (obj instanceof Carnivoro) {
                    if (obj.sexo == true) {
                        if (obj.masa < 0) {
                            muertoscrm++;
                            liscrm[0].dataset.kill = muertoscrm;
                            liscrm[0].innerText = muertoscrm;
                        } else {
                            masacrm += obj.masa;
                            velmdcrm += (obj.velocidad_mov.x + obj.velocidad_mov.y);
                            vivoscrm++;
                            liscrm[1].dataset.live = vivoscrm;
                            liscrm[1].innerText = vivoscrm;
                            liscrm[2].dataset.mas = masacrm / liscrm[1].dataset.live;
                            liscrm[2].innerText = masacrm / liscrm[1].dataset.live;
                            liscrm[3].dataset.vel =Math.floor( Math.abs(velmdcrm / liscrm[1].dataset.live));
                            liscrm[3].innerText = Math.floor(Math.abs(velmdcrm / liscrm[1].dataset.live));

                        }
                    } else {
                        if (obj.masa < 0) {

                            muertoscrh++;
                            liscrh[0].dataset.kill = muertoscrh;
                            liscrh[0].innerText = muertoscrh;

                        } else {
                            velmdcrh += (obj.velocidad_mov.x + obj.velocidad_mov.y);
                            vivoscrh++;
                            masacrh += obj.masa;
                            liscrh[1].dataset.live = vivoscrh;
                            liscrh[1].innerText = vivoscrh;
                            liscrh[2].dataset.mas = masacrh / liscrh[1].dataset.live;
                            liscrh[2].innerText = masacrh / liscrh[1].dataset.live;
                            liscrh[3].dataset.vel =Math.floor( Math.abs(velmdcrh / liscrh[1].dataset.live));
                            liscrh[3].innerText =Math.floor( Math.abs(velmdcrh / liscrh[1].dataset.live));


                        }


                    }
                }


            });



        }
        moverSeresVivos() {
            this.seres.forEach(obj => {
                if (obj instanceof Planta || obj instanceof fosil) {
                    if (obj instanceof Planta) {

                        console.log("masa " + this.maxmasaplanta)

                        if (this.maxmasaplanta > obj.masa) {
                            obj.masa += 0.01;
                            console.log(obj.masa + " dentro")
                        }


                    }

                } else {

                    if (obj.masa > 0) {

                        if (obj.edad > 99) {
                            this.seres.delete(obj);
                        } else {

                            if (obj.punto.x + obj.velocidad_mov.x > this.anchoCanvas || obj.punto.x + obj.velocidad_mov.x < 0) {

                                obj.velocidad_mov.x = -obj.velocidad_mov.x;
                            }
                            if (obj.punto.y + obj.velocidad_mov.y > this.altoCanvas || obj.punto.y + obj.velocidad_mov.y < 0) {

                                obj.velocidad_mov.y = -obj.velocidad_mov.y;

                            }

                            obj.punto.x += obj.velocidad_mov.x;
                            obj.punto.y += obj.velocidad_mov.y;
                            obj.edad += 0.01;
                        }
                    } else {
                        // this.seres.delete(obj);
                    }
                }

            });
            this.tiempoReal();
            this.choqueSeres();
            this.dibujarCanvas();
            this.dibujarSerVivo();
            this.estadisticas();

        }

        //TIEMPO!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        tiempoReal() {

            let momentoActual = new Date()
            let hora = momentoActual.getHours()
            let minuto = momentoActual.getMinutes()
            let segundo = momentoActual.getSeconds()

            let horaImprimible = hora + " : " + minuto + " : " + segundo

            document.getElementById("real").innerText = horaImprimible;



        }
        tiempo() {
            this.tmpDate.getDate();
        }
        dibujarCanvas() {

            this.contexto.strokeStyle = 'black';
            this.contexto.strokeRect(0, 0, this.altoCanvas, this.anchoCanvas)
            this.contexto.fillRect(0, 0, this.altoCanvas, this.anchoCanvas);
            this.contexto.beginPath();
            this.contexto.fillStyle = "green";
            this.contexto.fillRect(0, 0, this.altoCanvas, this.anchoCanvas);
            this.contexto.lineWidth = 5;


        }


        choqueSeres() {


            this.seres.forEach(ser => {



                this.seres.forEach(ser1 => {
                    if (ser1.masa != 0) {


                        if (ser1 != ser) {

                            let xd = ser.punto.x - ser1.punto.x;
                            let yd = ser.punto.y - ser1.punto.y;

                            let sumRadius = ser.masa + ser1.masa;

                            let distSqr = Math.sqrt((xd * xd) + (yd * yd));

                            if (distSqr <= sumRadius) {
                                this.reglasChoque(ser, ser1)

                                //alert("rebote");
                            }
                        }
                    }

                });


            })


        }

        comprobacionNacimiento(ser) {
            let pivot = true;
            this.seres.forEach(ser1 => {


                let xd = ser.punto.x - ser1.punto.x;
                let yd = ser.punto.y - ser1.punto.y;

                let sumRadius = ser.masa + ser1.masa;

                let distSqr = Math.sqrt((xd * xd) + (yd * yd));

                if (distSqr <= sumRadius) {

                    pivot = false;

                }



            });
            return pivot;
        }

        logsf(texto) {

            if (this.chekslogs.chk[0].checked) {
                document.getElementsByTagName("li").classList.contains("error").className("error hide");

            } else if (this.chekslogs.chk[1].checked) {
                document.getElementsByTagName("li").classList.contains("aviso").className("aviso hide");

            } else if (this.chekslogs.chk[2].checked) {
                document.getElementsByTagName("li").classList.contains("info").className("info hide");

            } else {

                if (texto.includes("[INFO]")) {
                    var newlist = document.createElement("li");
                    var content = document.createTextNode(texto);
                    newlist.className = "info";
                    newlist.style.color = "blue";
                    newlist.appendChild(content);
                    //document.body.insertBefore(newlist, this.logs); 
                    this.log.appendChild(newlist);
                } else if (texto.includes("[AVISO]")) {
                    var newlist = document.createElement("li");
                    var content = document.createTextNode(texto);
                    newlist.style.color = "orange";
                    newlist.className = "info";
                    newlist.appendChild(content);
                    //document.body.insertBefore(newlist, this.logs); 
                    this.log.appendChild(newlist);

                } else {
                    var newlist = document.createElement("li");
                    var content = document.createTextNode(texto);
                    newlist.style.color = "red";
                    newlist.className = "error";
                    newlist.appendChild(content);
                    //document.body.insertBefore(newlist, this.logs); 
                    this.log.appendChild(newlist);

                }
            }


        }

        reglasChoque(ser1, ser2) {
            /*
Cualquier animal (herbívoro o carnívoro) que rebote con un fósil, rebotará.
Si un herbívoro choca con una planta, gana un poco de masa y la planta pierde un poco de masa (esto debe afectar al tamaño de ambos)
Si dos herbívoros chocan, si son del mismo sexo simplemente rebotan, si son de sexo opuesto nace otro herbívoro por las inmediaciones.
Si dos carnívoros chocan, si son de sexo opuesto nace otro carnívoro por las inmediaciones, si son de sexo opuesto uno se comerá a otro,
 ganando masa. El carnívoro ganador se elegirá aleatoriamente y la probabilidad de ganar vendrá dada por su masa, velocidad, edad...
Si un herbívoro y un carnívoro chocan, el carnívoro se comerá al herbívoro, ganando masa (hasta un máximo)
Si un carnívoro choca con una planta, simplemente rebotará

            */
            if (ser1 instanceof fosil && ser2 instanceof Herviboro) {

                this.rebote(ser1, ser2);

                this.logsf("[INFO]: herviboro rebota en fosil")

            } else if (ser2 instanceof fosil && ser1 instanceof Herviboro) {

                this.rebote(ser1, ser2);

                this.logsf("[INFO]: herviboro hrebota en fosil")
            } else if (ser1 instanceof Planta && ser2 instanceof Herviboro) {
                if (this.masamaxherviboro > ser2.masa) {
                    ser2.masa = ser2.masa + 1;

                }
                //ser2.masa = min(ser2.masa+1, this.maxmasa);
                //console.log("masamaxherviboro " + this.masamaxherviboro);
                ser2.puntuacion++;
                ser1.masa = ser1.masa - 1;
                this.rebote(ser1, ser2);
                //console.log("herviboro come a planta");
                this.logsf("[INFO]: herviboro ha comido planta")

            } else if (ser2 instanceof Planta && ser1 instanceof Herviboro) {
                if (this.masamaxherviboro > ser1.masa) {
                    ser1.masa = ser1.masa + 1;

                }
                ser1.puntuacion++;
                ser2.masa = ser2.masa - 1;
                this.rebote(ser1, ser2);
                //console.log("herviboro come a planta");
                this.logsf("[INFO]: herviboro ha comido planta")
            } else if (ser2 instanceof Herviboro && ser1 instanceof Herviboro) {

                if (ser1.sexo != ser2.sexo) {

                    this.rebote(ser1, ser2);
                    this.generarHerviboro();
                    ser2.puntuacion += 0.5;
                    ser1.puntuacion += 0.5;
                    // console.log("se crea un nuevo herviboro");
                    this.logsf("[AVISO]: se crea un nuevo herviboro")
                }
                else {
                    this.rebote(ser1, ser2);
                    //console.log("rebotan dos herviboros del mismo sexo");
                    //si son del mismo sexo rebotan
                    this.logsf("[INFO]: rebotan dos herviboros del mismo sexo");
                }

            } else if (ser2 instanceof Carnivoro && ser1 instanceof Carnivoro) {

                if (ser1.sexo != ser2.sexo) {
                    this.rebote(ser1, ser2);
                    ser2.puntuacion += 0.5;
                    ser1.puntuacion += 0.5;
                    this.generarCarnivoro();
                    this.logsf("[AVISO]: se crea un nuevo carnivoro ");
                }
                else {
                    this.peleacarnivoros(ser1, ser2);
                    this.rebote(ser1, ser2);
                    //si son del mismo sexo un se come a otro
                    this.logsf("[INFO]: carnivoros pelean");
                }


            } else if (ser1 instanceof Carnivoro && ser2 instanceof Herviboro) {
                //el carnivoro se come al herviboro
                ser2.masa = ser2.masa - 1;
                if (this.maxmasacarnivoro > ser1.masa) {
                    ser1.masa = ser1.masa + 1;
                }
                ser1.puntuacion++;
                this.rebote(ser1, ser2);
                //console.log("carnivoro come a herviboro")
                this.logsf("[INFO]: carnivoros se come a herviboro");

            } else if (ser2 instanceof Carnivoro && ser1 instanceof Herviboro) {
                //el carnivoro se come al herviboro
                if (this.maxmasacarnivoro > ser2.masa) {
                    ser2.masa = ser2.masa + 1;
                }
                ser2.puntuacion++;
                ser1.masa = ser1.masa - 1;
                this.rebote(ser1, ser2);
                //console.log("carnivoro come a herviboro")
                this.logsf("[INFO]: carnivoros se come a herviboro");

            } else if ((ser1 instanceof Carnivoro && ser2 instanceof Planta) || (ser2 instanceof Carnivoro && ser1 instanceof Planta)) {
                this.rebote(ser1, ser2);

            } else if ((ser1 instanceof Carnivoro && ser2 instanceof fosil) || (ser2 instanceof Carnivoro && ser1 instanceof fosil)) {
                this.rebote(ser1, ser2);

            }




        }

        peleacarnivoros(ser1, ser2) {

            if (ser1.masa + ser1.vel_mov + ser1.edad > ser2.masa + ser2.vel_mov + ser2.edad) {
                if (this.maxmasacarnivoro > ser1.masa) {

                    ser1.masa = ser1.masa + 1;

                }
                ser1.puntuacion++;
                ser2.masa = ser2.masa - 1;
            } else {
                if (this.maxmasacarnivoro > ser2.masa) {
                    ser2.masa = ser2.masa + 1;


                }
                ser2.puntuacion++;
                ser1.masa = ser1.masa - 1;
            }
        }

        rebote(ser1, ser2) {
            if (ser1 instanceof Planta || ser1 instanceof fosil) {
                ser2.velocidad_mov.x *= -1;
                ser2.velocidad_mov.y *= -1;
                ser2.punto.x += ser2.velocidad_mov.x;
                ser2.punto.y += ser2.velocidad_mov.y;
            } else if (ser2 instanceof Planta || ser2 instanceof fosil) {
                ser1.velocidad_mov.x *= -1;
                ser1.velocidad_mov.y *= -1;
                ser1.punto.x += ser1.velocidad_mov.x;
                ser1.punto.y += ser1.velocidad_mov.y;
            } else {


                ser1.velocidad_mov.x *= -1;
                ser1.velocidad_mov.y *= -1;
                ser1.punto.x += ser1.velocidad_mov.x;
                ser1.punto.y += ser1.velocidad_mov.y;
                ser2.velocidad_mov.x *= -1;
                ser2.velocidad_mov.y *= -1;
                ser2.punto.x += ser2.velocidad_mov.x;
                ser2.punto.y += ser2.velocidad_mov.y;
            }

        }
        generarHerviboro() {

            if (this.maxseres > this.seres.size) {


                let random = Math.floor(Math.random() * 8);

                switch (random) {
                    case 0:
                        this.crearAnimalHerviboro(7, 2, "beige", true, 2, new velocidad(2, 3));
                        break;
                    case 1:
                        this.crearAnimalHerviboro(2, 7, "purple", false, 4, new velocidad(3, 2));
                        break;
                    case 2:
                        this.crearAnimalHerviboro(5, 3, "beige", true, 3, new velocidad(10, 3));
                        break;
                    case 3:
                        this.crearAnimalHerviboro(6, 9, "purple", false, 6, new velocidad(2, 10));
                        break;
                    case 4:
                        this.crearAnimalHerviboro(5, 7, "beige", true, 3, new velocidad(5, 3));
                        break;
                    case 5:
                        this.crearAnimalHerviboro(3, 6, "purple", false, 1, new velocidad(2, 5));
                        break;
                    case 6:
                        this.crearAnimalHerviboro(6, 3, "purple", false, 4, new velocidad(6, 3));
                        break;
                    case 7:
                        this.crearAnimalHerviboro(9, 3, "beige", true, 7, new velocidad(7, 6));
                        break;

                }
            }

        }

        generarCarnivoro() {


            if (this.maxseres > this.seres.size) {


                let random = Math.floor(Math.random() * 8);

                switch (random) {
                    case 0:
                        this.crearAnimalCarnivoro(7, 2, "orange", true, 2, new velocidad(2, 3));
                        break;
                    case 1:
                        this.crearAnimalCarnivoro(2, 7, "red", false, 4, new velocidad(3, 2));
                        break;
                    case 2:
                        this.crearAnimalCarnivoro(5, 3, "orange", true, 3, new velocidad(10, 3));
                        break;
                    case 3:
                        this.crearAnimalCarnivoro(6, 9, "red", false, 6, new velocidad(2, 10));
                        break;
                    case 4:
                        this.crearAnimalCarnivoro(5, 7, "orange", true, 3, new velocidad(5, 3));
                        break;
                    case 5:
                        this.crearAnimalCarnivoro(3, 6, "red", false, 1, new velocidad(2, 5));
                        break;
                    case 6:
                        this.crearAnimalCarnivoro(6, 3, "red", false, 4, new velocidad(6, 3));
                        break;
                    case 7:
                        this.crearAnimalCarnivoro(9, 3, "orange", true, 7, new velocidad(7, 6));
                        break;

                }
            }
        }

        crearPlanta(masa, color, vel_cre) {

            do {

                let x = Math.random() * this.anchoCanvas;
                let y = Math.random() * this.altoCanvas;
                let punto = new Punto(x, y);



                var p = new Planta(punto, color, masa, vel_cre);





            } while (!this.comprobacionNacimiento(p))


            this.seres.add(p);

            return p;

        }
        crearPlantaPos(x, y, masa, color, vel_cre) {

            do {

                let punto = new Punto(x, y);



                var p = new Planta(punto, color, masa, vel_cre);





            } while (!this.comprobacionNacimiento(p))


            this.seres.add(p);

            return p;

        }
        crearFosil(x, y, masa, vel_cre) {

            let punto = new Punto(x, y);
            var p = new fosil(punto, "white", masa, vel_cre);
            this.seres.add(p);

        }

        crearAnimalCarnivoro(masa, vel_cre, color, sexo, edad, vel_mov) {


            let x = Math.random() * this.anchoCanvas; // dimensiones del canvas
            let y = Math.random() * this.altoCanvas;
            let punto = new Punto(x, y);

            let p = new Carnivoro(sexo, edad, vel_mov, 0, punto, color, masa, vel_cre);
            this.seres.add(p);
            // console.log("se mete");

            return p;

        }



        crearAnimalHerviboro(masa, vel_cre, color, sexo, edad, vel_mov) {


            let x = Math.random() * this.anchoCanvas; // dimensiones del canvas
            let y = Math.random() * this.altoCanvas;
            let punto = new Punto(x, y);



            let p = new Herviboro(sexo, edad, vel_mov, 0, punto, color, masa, vel_cre);

            this.seres.add(p);


            return p;

        }


        nacerAnimalHerviboro(masa, vel_cre, color, sexo, edad, vel_mov) {
            let i = 0;
            let pivot = false;
            do {

                let x = Math.random() * this.anchoCanvas; // dimensiones del canvas
                let y = Math.random() * this.altoCanvas;
                let punto = new Punto(x, y);



                let p = new Herviboro(sexo, edad, vel_mov, 0, punto, color, masa, vel_cre);
                if (this.comprobacionNacimiento(p)) {
                    this.seres.add(p);
                    pivot = true;
                    console.log("se crea")
                }
                i++;
                console.log("esta naciendo")
            } while (i < 10 || pivot == false);





            return p;

        }



    }


    class SeresVivos {


        get punto() {
            return this._punto;
        }
        set punto(value) {
            this._punto = value;
        }

        get color() {
            return this._color;
        }
        set color(value) {
            this._color = value;
        }

        get masa() {
            return this._masa;
        }
        set masa(value) {
            this._masa = value;
        }

        get velocidad_cre() {
            return this._velocidad_cre;
        }
        set velocidad_cre(value) {
            this._velocidad_cre = value;
        }



        constructor(punto, color, masa, velocidad_cre) {
            this.punto = punto;
            this.color = color;
            this.masa = masa;
            this.velocidad_cre = velocidad_cre;

        }


    }


    class Planta extends SeresVivos {

        constructor(...param) {
            super(...param);

        }

    }

    class fosil extends SeresVivos {

        constructor(...param) {
            super(...param);

        }

    }




    class Animal extends SeresVivos {

        get sexo() {
            return this._sexo;
        }
        set sexo(value) {
            this._sexo = value;
        }

        get edad() {
            return this._edad;
        }
        set edad(value) {
            this._edad = value;
        }
        get velocidad_mov() {
            return this._velocidad_mov;
        }
        set velocidad_mov(value) {
            this._velocidad_mov = value;
        }
        get color() {
            return this._color;
        }
        set color(value) {
            this._color = value;
        }



        constructor(sexo, edad, velocidad_mov, puntuacion, ...param) {
            super(...param);
            this.sexo = sexo;
            this.edad = edad;
            this.velocidad_mov = velocidad_mov;
            this.puntuacion = puntuacion;


        }



    }




    class Carnivoro extends Animal {


        constructor(...param) {
            super(...param);

        }

    }
    class Herviboro extends Animal {
        //punto, color, masa, velocidad_cre, sexo, edad, velocidad_mov
        constructor(...param) {
            super(...param);

        }

    }


    class Punto {

        constructor(x, y) {
            this.x = x;
            this.y = y;
        }



    }


    class velocidad {

        constructor(x, y) {
            this.x = x;
            this.y = y;
        }



    }


    //BOTON DE SIMULAR

    var botonSimular = document.getElementById('simulador');
    const CONFIG = new Config("myCanvas");
    botonSimular.onclick = function () {
        //const CONFIG = new Config("myCanvas");

        CONFIG.maxseres = document.getElementById('maxseres').value;
        crearSeresHerviboroH(CONFIG);
        crearSeresHerviboroM(CONFIG);
        crearCarniH(CONFIG);
        crearCarniM(CONFIG);
        crearPlanta(CONFIG)

        CONFIG.maxmasaplanta = +document.getElementById("masamaxplanta").value;
        console.log(CONFIG.maxmasaplanta)

        CONFIG.masiniplanta = +document.getElementById("masiniplanta").value;

        CONFIG.velnaciplanta = +document.getElementById("velnaciplanta").value;

        CONFIG.masamaxherviboro = +document.getElementById("masamaxherviboro").value;
        CONFIG.maxmasacarnivoro = +document.getElementById("masmaxcarnivoros").value;
        CONFIG.velcreplanta = +document.getElementById("velcreplanta").value;

        setInterval(function () {
            var elapsedTime = Date.now() - CONFIG.tmpDate;
            CONFIG.tiempoSimulacion = (elapsedTime / 1000).toFixed(3);
            document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);

        }, 100)

        CONFIG.velgen = +document.getElementById("velocidad").value;

        CONFIG.timer = window.setInterval(simular, Math.abs(30 / CONFIG.velgen), CONFIG);
        document.getElementById("cargarurl").disabled = true;
        document.getElementById("verrurl").disabled = true;
        document.getElementById("guardarrurl").disabled = true;

        document.getElementById("importarjson").disabled = true;
        document.getElementById("exportarjson").disabled = true;
        document.getElementById("limpiarjson").disabled = true;



        document.getElementById('reinicio').disabled = false;

        document.getElementById('reinicio').innerText = 'Pausa';

        document.getElementById('jugar').disabled = false;

    }
    var botonReinicio = document.getElementById('reinicio');

    botonReinicio.onclick = function () {


        if (document.getElementById('reinicio').innerText == 'Pausa') {
            document.getElementById("cargarurl").disabled = false;
            document.getElementById("verrurl").disabled = false;
            document.getElementById("guardarrurl").disabled = false;
            document.getElementById("importarjson").disabled = false;
            document.getElementById("exportarjson").disabled = false;
            document.getElementById("limpiarjson").disabled = false;
            window.clearInterval(CONFIG.timer);
            document.getElementById('reinicio').innerText = 'Reiniciar';
        } else {
            const CONFIG = new Config("myCanvas");


            CONFIG.maxseres = document.getElementById('maxseres').value;
            crearSeresHerviboroH(CONFIG);
            crearSeresHerviboroM(CONFIG);
            crearCarniH(CONFIG);
            crearCarniM(CONFIG);
            crearPlanta(CONFIG)


            CONFIG.timer = window.setInterval(simular, 20, CONFIG);
            document.getElementById('reinicio').innerText = 'Pausa';


        }

    }



    //GENERAR FOSILES
    CONFIG.btncrearfosil.onclick = function () {
        console.log("entra en el onclick")
        var x = +document.getElementById("x1").value;
        var y = +document.getElementById("y1").value;
        var mas = +document.getElementById("mas1").value;
        console.log("x :" + x + " y :" + y + " mas :" + mas);
        CONFIG.crearFosil(x, y, mas, null);


        var div = document.createElement("div");
        var p1 = document.createElement("p");
        var input1 = document.createElement("input");
        var boton = document.createElement("button");
        boton.name = x + "-" + y;
        boton.innerText = "X";
        boton.addEventListener("click", quitarfosil, false);
        input1.type = "text";
        input1.value = x + "-" + y;
        var x = document.createTextNode("fosil :");
        p1.appendChild(x);
        p1.appendChild(boton);
        p1.appendChild(input1);

        div.appendChild(p1);

        document.getElementById("fosiles").appendChild(div);

        CONFIG.logsf("[AVISO]: se creo un fosil!");

    }
    //QUITAR FOSILES    
    function quitarfosil() {
        var arr = this.name.split("-");
        for (let obj of CONFIG.seres) {
            if (obj instanceof fosil) {
                if (obj.punto.x == +arr[0] && obj.punto.y == +arr[1]) {
                    CONFIG.seres.delete(obj);
                    CONFIG.logsf("[AVISO]: fosil borrado!");
                    this.parentNode.parentNode.removeChild(this.parentNode);
                }

            }

        }

    }

    //GENERAR SER VIVO POR CLICK EN EL CANVAS
    CONFIG.cans.onclick = (e) => {

        var x = e.clientX - 200;
        var y = e.clientY - 100;


        CONFIG.crearPlanta(x, y, 10, "green", 4);
    }
    //PONER SERES EN PUNTOS ATLEATORIOS

    CONFIG.ponerplanta.onclick = function () {

        CONFIG.crearPlanta(10, "green", 3);

    }
    CONFIG.ponercarnivoro.onclick = function () {


        if (CONFIG.chkcar.gender[0].checked) {
            CONFIG.crearAnimalCarnivoro(10, 2, "orange", true, 12, new velocidad(4, 3));

        } else {
            CONFIG.crearAnimalCarnivoro(10, 2, "red", false, 12, new velocidad(4, 3));
        }


    }
    CONFIG.ponerherviboro.onclick = function () {


        if (CONFIG.chkher.gender[0].checked) {
            CONFIG.crearAnimalHerviboro(10, 12, "beige", true, 14, new velocidad(3, 4));
        } else {
            CONFIG.crearAnimalHerviboro(10, 12, "purple", false, 14, new velocidad(3, 4));
        }


    }
    //QUITAR SERES 


    CONFIG.quitarplanta.onclick = function () {


        for (let obj of CONFIG.seres) {
            if (obj instanceof Planta) {
                CONFIG.seres.delete(obj);
                break;
            }
        }



    }

    CONFIG.quitarcarnivoro.onclick = function () {


        for (let obj of CONFIG.seres) {
            if (obj instanceof Carnivoro) {
                if (CONFIG.chkher.gender[0].checked && obj.sexo == true) {
                    CONFIG.seres.delete(obj);
                    break;
                } else if (CONFIG.chkher.gender[1].checked && obj.sexo == false) {
                    CONFIG.seres.delete(obj);
                    break;
                }
            }
        }



    }
    CONFIG.quitarherviboro.onclick = function () {


        for (let obj of CONFIG.seres) {
            if (obj instanceof Herviboro) {
                if (CONFIG.chkher.gender[0].checked && obj.sexo == true) {
                    CONFIG.seres.delete(obj);
                    break;
                } else if (CONFIG.chkher.gender[1].checked && obj.sexo == false) {
                    CONFIG.seres.delete(obj);
                    break;
                }
            }
        }



    }

    function simular(CONFIG) {

        CONFIG.moverSeresVivos();
    }

    function crearSeresHerviboroH(CONFIG) {
        var numherH = document.getElementById("herviboro(H)").value;
        numherH = parseInt(numherH);
        if (numherH > 0) {
            for (let i = 0; i < numherH; i++) {
                CONFIG.crearAnimalHerviboro(20, 12, "purple", false, 14, new velocidad(3, 4));
            }
        } else {
            numherH = Math.floor((Math.random() * Math.abs(numherH)) + 1);
            for (let i = 0; i < numherH; i++) {
                CONFIG.crearAnimalHerviboro(20, 12, "purple", false, 14, new velocidad(3, 4));
            }
        }
    }
    function crearSeresHerviboroM(CONFIG) {
        var numherH = document.getElementById("herviboro(M)").value;
        numherH = parseInt(numherH);
        if (numherH > 0) {
            for (let i = 0; i < numherH; i++) {
                CONFIG.crearAnimalHerviboro(20, 12, "beige", true, 14, new velocidad(3, 4));
            }
        } else {
            numherH = Math.floor((Math.random() * Math.abs(numherH)) + 1);
            for (let i = 0; i < numherH; i++) {
                CONFIG.crearAnimalHerviboro(20, 12, "beige", true, 14, new velocidad(3, 4));
            }
        }
    }
    function crearCarniM(CONFIG) {
        var numherH = document.getElementById("carni(M)").value;
        numherH = parseInt(numherH);
        if (numherH > 0) {
            for (let i = 0; i < numherH; i++) {
                CONFIG.crearAnimalCarnivoro(10, 2, "orange", true, 12, new velocidad(4, 3));
            }
        } else {
            numherH = Math.floor((Math.random() * Math.abs(numherH)) + 1);
            for (let i = 0; i < numherH; i++) {
                CONFIG.crearAnimalCarnivoro(10, 2, "orange", true, 12, new velocidad(4, 3));
            }
        }
    }
    function crearCarniH(CONFIG) {
        var numherH = document.getElementById("carni(H)").value;
        numherH = parseInt(numherH);
        if (numherH > 0) {
            for (let i = 0; i < numherH; i++) {
                CONFIG.crearAnimalCarnivoro(10, 2, "red", false, 12, new velocidad(4, 3));
            }
        } else {
            numherH = Math.floor((Math.random() * Math.abs(numherH)) + 1);
            for (let i = 0; i < numherH; i++) {
                CONFIG.crearAnimalCarnivoro(10, 2, "red", false, 12, new velocidad(4, 3));
            }
        }
    }
    function crearPlanta(CONFIG) {
        var numherH = document.getElementById("plantas").value;
        numherH = parseInt(numherH);
        if (numherH > 0) {
            for (let i = 0; i < numherH; i++) {
                CONFIG.crearPlanta(10, "green", 3);
            }
        } else {
            numherH = Math.floor((Math.random() * Math.abs(numherH)) + 1);
            for (let i = 0; i < numherH; i++) {
                CONFIG.crearPlanta(10, "green", 3);
            }
        }
    }

    //GUARDAR EN STORAGE


    CONFIG.guardarenstorage.onclick = function () {

        var name = document.getElementById("nameconfig").value;
        //var coment = document.getElementById("textconfig").value;
        var miobjeto = {
            //"comentario": coment,
            "tiempoSimulacion": CONFIG.tiempoSimulacion,
            "seres": CONFIG.seres.size,
            "maxmasplantas": CONFIG.maxmasaplanta,
            "maxmasaherviboro": CONFIG.masamaxherviboro,
            "maxmasacarnivoro": CONFIG.maxmasacarnivoro,
            "masainiplanta": CONFIG.masiniplanta,

        };


        localStorage.setItem(name, JSON.stringify(miobjeto))



    }


    function validar(elem, tipo) {
        let res = false;

        switch (tipo) {
            case 'texto':
                let re = /([A-zZ])\w+/;
                if (re.test(elem)) {
                    res = true;

                } else {
                    console.log(elem);
                }
                break;
            case 'numero':
                let resp = /([0-9])+/;
                if (resp.test(elem)) {
                    res = true;

                } else {
                    console.log(elem);
                }
                break;



        }

        return res;

    }
    //JSON

    document.getElementById("importarjson").onclick = function () {


        var json = document.getElementById("textjson").value;

        var nuevojson = json.substring(json.length - 1, 1);

        var arr = nuevojson.split(",");

        for (let elem of arr) {

            elem = elem.split(":");
            var texto = elem[0].substring(elem[0].length - 1, 1);

            if (!validar(texto, "texto") || !validar(elem[1], "numero")) {
                alert("ha introducido mal el json");
            } else {
                try {
                    console.log(texto + "  : " + elem[1]);
                    document.getElementById(texto).value = elem[1];

                } catch{

                }



            }




        }



    }



    document.getElementById("exportarjson").onclick = function () {
        try {
            var miobjeto = {
                //"comentario": coment,


                "masamaxplanta": CONFIG.maxmasaplanta,
                "masamaxherviboro": CONFIG.masamaxherviboro,
                "masmaxcarnivoros": CONFIG.maxmasacarnivoro,
                "masiniplanta": CONFIG.masiniplanta,
                "timer": CONFIG.tiempoSimulacion,
                "seres": CONFIG.seres.size

            };
            document.getElementById("textjson").innerText = JSON.stringify(miobjeto);
        } catch{
            alert("no hay nada para guardar!");

        }


    }

    document.getElementById("limpiarjson").onclick = function () {
        document.getElementById("textjson").innerText = "";
    }

    document.getElementById("cargarurl").onclick = function () {


        var url = document.getElementById("texturl").value;

        var arrvar = url.split("&");

        for (let elems of arrvar) {

            let elem = elems.split("=");
            if (!validar(elem[0], "texto") || !validar(elem[1], "numero")) {
                alert("ha introducido mal la url!");
            }

        }


    }
    document.getElementById("verrurl").onclick = function () {
        var url = document.getElementById("texturl").value;
        var arrvar = url.split("&");
        var nuevostring = "";
        for (let elems of arrvar) {

            nuevostring += elems + '\n';

        }
        alert(nuevostring);

    }


    window.onresize = function () {
        if (this.window.innerWidth < 1200 || this.window.innerWidth < 600) {
            this.alert("la pantalla es muy pequeña para ejecutar el juego!");

        }

    }


}

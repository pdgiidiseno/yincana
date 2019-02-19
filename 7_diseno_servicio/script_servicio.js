var globalID = 7; // estación número?
var secret1 = "confiable";
var secret2 = "oportuno";
var secret3 = "efectivo";

var places = ["BIENVENIDO A LA YINCANA", /*0*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/AZ.html\">HAZ CLIC AQUÍ</a></strong>", /*1*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/BY.html\">HAZ CLIC AQUÍ</a></strong>", /*2*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/CX.html\">HAZ CLIC AQUÍ</a></strong>", /*3*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/DW.html\">HAZ CLIC AQUÍ</a></strong>", /*4*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/EV.html\">HAZ CLIC AQUÍ</a></strong>", /*5*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/FU.html\">HAZ CLIC AQUÍ</a></strong>", /*6*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/GT.html\">HAZ CLIC AQUÍ</a></strong>", /*7*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/HS.html\">HAZ CLIC AQUÍ</a></strong>", /*8*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/IR.html\">HAZ CLIC AQUÍ</a></strong>", /*9*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/JQ.html\">HAZ CLIC AQUÍ</a></strong>" /*10*/
]

var teams = ["profes,", /*0*/
/*1*/ "Cadera / rodilla",
/*2*/ "Comida Ambulantes",
/*3*/ "Cultivos hidropónicos",
/*4*/ "Geriatrico",
/*5*/ "Nirvana",
/*6*/ "Segunda Mano",
/*7*/ "Sordos",
/*8*/ "TDAH",
/*9*/ "Vino Mora",
/*10*/ "Zoo Prof/Pend",
/*11*/ "Residuos Orgánicos"
];

var rutaGrupo0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var rutaGrupo1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var rutaGrupo2 = [0, 2, 3, 4, 5, 6, 7, 8, 9, 1, 10];
var rutaGrupo3 = [0, 3, 4, 5, 6, 7, 8, 9, 1, 2, 10];
var rutaGrupo4 = [0, 4, 5, 6, 7, 8, 9, 1, 2, 3, 10];
var rutaGrupo5 = [0, 5, 6, 7, 8, 9, 1, 2, 3, 4, 10];
var rutaGrupo6 = [0, 6, 7, 8, 9, 1, 2, 3, 4, 5, 10];
var rutaGrupo7 = [0, 7, 8, 9, 1, 2, 3, 4, 5, 6, 10];
var rutaGrupo8 = [0, 8, 9, 1, 2, 3, 4, 5, 6, 7, 10];
var rutaGrupo9 = [0, 9, 1, 2, 3, 4, 5, 6, 7, 8, 10];
var rutaGrupo10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var rutaGrupo11 = [0, 2, 3, 4, 5, 6, 7, 8, 9, 1, 10];

var rutas = [rutaGrupo0, rutaGrupo1, rutaGrupo2, rutaGrupo3, rutaGrupo4, rutaGrupo5, rutaGrupo6, rutaGrupo7, rutaGrupo8, rutaGrupo9, rutaGrupo10, rutaGrupo11];

var url = new URL(window.location.href);
var team = url.searchParams.get("t");

var title_team = document.getElementById("team_id_welcome");
title_team.innerText = "" + teams[parseInt(team)];

var pistas = [false, false, false];
showTip();

var pistaA = document.getElementById("a");
var pistaB = document.getElementById("b");
var pistaC = document.getElementById("c");

pistaA.addEventListener("change", function () {
    var feeback = document.getElementById("feedback_clave1");
    if (pistaA.value === secret1) {
        feeback.innerHTML = " Correcto";
        feeback.className = "ok_text_feedback";
        pistas[0] = true;
    } else {
        feeback.innerHTML = " Oh Oh!! incorrecto";
        feeback.className = "error_text_feedback";
        pistas[0] = false;
    }
    showTip();
});

pistaB.addEventListener("change", function () {
    var feeback = document.getElementById("feedback_clave2");
    if (pistaB.value === secret2) {
        feeback.innerHTML = " Correcto";
        feeback.className = "ok_text_feedback";
        pistas[1] = true;
    } else {
        feeback.innerHTML = " Oh Oh!! incorrecto";
        feeback.className = "error_text_feedback";
        pistas[1] = false;
    }
    showTip();
});


pistaC.addEventListener("change", function () {
    var feeback = document.getElementById("feedback_clave3");
    if (pistaC.value === secret3) {
        feeback.innerHTML = " Correcto";
        feeback.className = "ok_text_feedback";
        pistas[2] = true;
    } else {
        feeback.innerHTML = " Oh Oh!! incorrecto";
        feeback.className = "error_text_feedback";
        pistas[2] = false;
    }
    showTip();
});

function showTip() {
    var tipText = document.getElementById("url_next_container");
    if (pistas[0] === true && pistas[1] === true && pistas[2] === true) {
        tipText.className = "show_tip";
        var ubicacionActual = rutas[parseInt(team)].indexOf(globalID);        
        var indiceDestino = (ubicacionActual + 1);
        var destino = rutas[parseInt(team)][indiceDestino];
        tipText.innerHTML = places[destino];        
    } else {
        tipText.className = "hidden_tip";
    }
}


var btn = document.getElementById("btn");
btn.addEventListener("click", function () {

    var feeback = document.getElementById("feedback_clave1");
    if (pistaA.value === secret1) {
        feeback.innerHTML = " Correcto";
        feeback.className = "ok_text_feedback";
        pistas[0] = true;
    } else {
        feeback.innerHTML = " Oh Oh!! incorrecto";
        feeback.className = "error_text_feedback";
        pistas[0] = false;
    }

    var feeback = document.getElementById("feedback_clave2");
    if (pistaB.value === secret2) {
        feeback.innerHTML = " Correcto";
        feeback.className = "ok_text_feedback";
        pistas[1] = true;
    } else {
        feeback.innerHTML = " Oh Oh!! incorrecto";
        feeback.className = "error_text_feedback";
        pistas[1] = false;
    }

    var feeback = document.getElementById("feedback_clave3");
    if (pistaC.value === secret3) {
        feeback.innerHTML = " Correcto";
        feeback.className = "ok_text_feedback";
        pistas[2] = true;
    } else {
        feeback.innerHTML = " Oh Oh!! incorrecto";
        feeback.className = "error_text_feedback";
        pistas[2] = false;
    }

    showTip();
});
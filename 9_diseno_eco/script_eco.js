var globalID = 9; // estación número?
var secret1 = "naturaleza";
var secret2 = "planeta";
var secret3 = "silvestre";

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
    pistaA.value
    
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
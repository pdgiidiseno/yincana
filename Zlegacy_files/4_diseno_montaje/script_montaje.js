var globalID = 4; // estación número?

var url = new URL(window.location.href);
var team = url.searchParams.get("t");

var title_team = document.getElementById("team_id_welcome");
title_team.innerText = "" + teams[parseInt(team)];

var feedbacks = document.getElementsByClassName("feedback_clave");
var entradaPistas = document.getElementsByClassName("entradas_pistas_claves");

for (let i = 0; i < 3; i++) {
    entradaPistas[i].addEventListener("change", function () {
        validar(i);
    });
}

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    validar(0);
    validar(1);
    validar(2);
});

function validar(i) {
    let actualFeedback = feedbacks[i];
    let pistas = [false, false, false];
    if (entradaPistas[i].value === secretos[globalID][i]) {
        actualFeedback.innerHTML = " Correcto";
        actualFeedback.className = "ok_text_feedback feedback_clave";
        pistas[i] = true;
    } else {
        actualFeedback.innerHTML = " Oh Oh!! incorrecto";
        actualFeedback.className = "error_text_feedback feedback_clave";
        pistas[i] = false;
    }
    showTip(pistas);
}

function showTip(pistas) {
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
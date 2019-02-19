var url = new URL(window.location.href);
var place = url.searchParams.get("p");

var placesNames = [
    "Lanzamiento", /*0*/
    "Estación Fabricación Rápida", /*1*/
    "Estación Diseño Paramétrico", /*2*/
    "Estación Diseño para Manufactura", /*3*/
    "Estación Diseño para Montaje", /*4*/
    "Estación Diseño para Logistica", /*5*/
    "Estación Diseño para Calida", /*6*/
    "Estación Diseño para Servicio", /*7*/
    "Estación Diseño para Desmontaje", /*8*/
    "Estación Diseño mpara el medio ambiente", /*9*/
    "Fin" /*10*/
];

var estacion = document.getElementById("place_name");
estacion.innerText = placesNames[place];

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    var selector = document.getElementById("selector");
    var strTeam = selector.options[selector.selectedIndex].value;
    console.log("equipo: " + strTeam);
    console.log("espacio: " + place + " " + placesNames[place]);
    switch (parseInt(place)) {
        case 1:
            location.href = "https://pdgiidiseno.github.io/yincana/1_fabricacion_rapida/fabrap.html?t=" + strTeam;
            break;
        case 2:
            location.href = "https://pdgiidiseno.github.io/yincana/2_diseno_parametrico/parametrico.html?t=" + strTeam;
            break;
        case 3:
            location.href = "https://pdgiidiseno.github.io/yincana/3_diseno_manufactura/manufactura.html?t=" + strTeam;
            break;
        case 4:
            location.href = "https://pdgiidiseno.github.io/yincana/4_diseno_montaje/montaje.html?t=" + strTeam;
            break;
        case 5:
            location.href = "https://pdgiidiseno.github.io/yincana/5_diseno_logistica/logistica.html?t=" + strTeam;
            break;
        case 6:
            location.href = "https://pdgiidiseno.github.io/yincana/6_diseno_calidad/calidad.html?t=" + strTeam;
            break;
        case 7:
            location.href = "https://pdgiidiseno.github.io/yincana/7_diseno_servicio/servicio.html?t=" + strTeam;
            break;
        case 8:
            location.href = "https://pdgiidiseno.github.io/yincana/8_diseno_desmontaje/desmontaje.html?t=" + strTeam;
            break;
        case 9:
            location.href = "https://pdgiidiseno.github.io/yincana/9_diseno_eco/eco.html?t=" + strTeam;
            break;
            /* Desde este punto se podrían incluir más estaciones */       
    }

});
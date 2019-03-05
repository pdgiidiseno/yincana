var url = new URL(window.location.href);
var place = url.searchParams.get("p");

var placesNames = [
    "Esquema de la oferta", /*0*/ /*innlab*/
    "Producción y Manufactura", /*1*/
    "Adquisición y Compra", /*2*/
    "Distribución y Logística", /*3*/
    "Instalación y Configuración", /*4*/
    "Uso / Usabilidad", /*5*/
    "Uso / Conectividad", /*6*/
    "Uso / Visualización", /*7*/
    "Mantenimiento y Servicio", /*8*/
    "Disposición", /*9*/
    "Integración", /*10*/
];
var estacion = document.getElementById("place_name");
estacion.innerText = placesNames[place];

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    var selector = document.getElementById("selector");
    var strTeam = selector.options[selector.selectedIndex].value;
    //console.log("equipo: " + strTeam);
    //console.log("espacio: " + place + " " + placesNames[place]);
    switch (parseInt(place)) {
        case 0:
            location.href = "https://pdgiidiseno.github.io/yincana/estaciones/0_esquema.html?t=" + strTeam;
            break;
        case 1:
            location.href = "https://pdgiidiseno.github.io/yincana/estaciones/1_produccion.html?t=" + strTeam;
            break;
        case 2:
            location.href = "https://pdgiidiseno.github.io/yincana/estaciones/2_adquisicion.html?t=" + strTeam;
            break;
        case 3:
            location.href = "https://pdgiidiseno.github.io/yincana/estaciones/3_distribucion.html?t=" + strTeam;
            break;
        case 4:
            location.href = "https://pdgiidiseno.github.io/yincana/estaciones/4_instalacion.html?t=" + strTeam;
            break;
        case 5:
            location.href = "https://pdgiidiseno.github.io/yincana/estaciones/5_usabilidad.html?t=" + strTeam;
            break;
        case 6:
            location.href = "https://pdgiidiseno.github.io/yincana/estaciones/6_conectividad.html?t=" + strTeam;
            break;
        case 7:
            location.href = "https://pdgiidiseno.github.io/yincana/estaciones/7_visualizacion.html?t=" + strTeam;
            break;
        case 8:
            location.href = "https://pdgiidiseno.github.io/yincana/estaciones/8_mantenimiento.html?t=" + strTeam;
            break;
        case 9:
            location.href = "https://pdgiidiseno.github.io/yincana/estaciones/9_disposicion.html?t=" + strTeam;
            break;
        case 10:
            location.href = "https://pdgiidiseno.github.io/yincana/estaciones/10_integracion.html?t=" + strTeam;
            break;
            /* Desde este punto se podrían incluir más estaciones */
    }

});
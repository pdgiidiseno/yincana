var places = [
    "BIENVENIDO A LA YINCANA", /*0*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/AZ.html\">HAZ CLIC AQUÍ</a></strong>", /*envia al 1*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/BY.html\">HAZ CLIC AQUÍ</a></strong>", /*envia al 2*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/CX.html\">HAZ CLIC AQUÍ</a></strong>", /*envia al 3*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/DW.html\">HAZ CLIC AQUÍ</a></strong>", /*envia al 4*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/EV.html\">HAZ CLIC AQUÍ</a></strong>", /*envia al 5*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/FU.html\">HAZ CLIC AQUÍ</a></strong>", /*envia al 6*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/GT.html\">HAZ CLIC AQUÍ</a></strong>", /*envia al 7*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/HS.html\">HAZ CLIC AQUÍ</a></strong>", /*envia al 8*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/IR.html\">HAZ CLIC AQUÍ</a></strong>", /*envia al 9*/
    "Siguiente paso: <strong><a target=\"_blank\" href=\"../sitios/JQ.html\">HAZ CLIC AQUÍ</a></strong>", /*envia al 10*/
    "<H1>Enhorabuena habeís finalizado el proceso, andá y bebed alguna bebida refrescante</h1>" /*envia al 11*/
]

var teams = [
    "Aceite" /*0*/ ,
    "Aguas San Cipriano" /*1*/ ,
    "Alquiler Vivienda" /*2*/ ,
    "Bata blanca" /*3*/ ,
    "Bioacústica" /*4*/ ,
    "Guardas seguridad" /*5*/ ,
    "Ladrillos" /*6*/ ,
    "Liquidos excretados" /*7*/ ,
    "Logistica mudanza" /*8*/ ,
    "Marcación tiburón" /*9*/ ,
    "Reducción peso" /*10*/ ,
    "Vacunación" /*11*/ ,
    "Acoso callejero" /*12*/ ,
    "Ai creativa" /*13*/ ,
    "Eficacia Shopper" /*14*/ ,
    "Esguince tobillo" /*15*/ ,
    "Gamificación" /*16*/ ,
    "Innlab" /*17*/ ,
    "Magioruga" /*18*/ ,
    "Parálisis Cerebral" /*19*/ ,
    "Turnos" /*20*/ ,
    "Lideres Sociales" /*21*/
];




var rutaGrupo0 = [0, 4, 5, 6, 7, 8, 9, 1, 2, 3, 0];
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
var rutaGrupo12 = [0, 3, 4, 5, 6, 7, 8, 9, 1, 2, 10];
var rutaGrupo13 = [0, 4, 5, 6, 7, 8, 9, 1, 2, 3, 10];
var rutaGrupo14 = [0, 5, 6, 7, 8, 9, 1, 2, 3, 4, 10];
var rutaGrupo15 = [0, 6, 7, 8, 9, 1, 2, 3, 4, 5, 10];
var rutaGrupo16 = [0, 7, 8, 9, 1, 2, 3, 4, 5, 6, 10];
var rutaGrupo17 = [0, 8, 9, 1, 2, 3, 4, 5, 6, 7, 10];
var rutaGrupo18 = [0, 9, 1, 2, 3, 4, 5, 6, 7, 8, 10];
var rutaGrupo19 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var rutaGrupo20 = [0, 2, 3, 4, 5, 6, 7, 8, 9, 1, 10];
var rutaGrupo21 = [0, 3, 4, 5, 6, 7, 8, 9, 1, 2, 10];

var rutas = [
    rutaGrupo0, rutaGrupo1, rutaGrupo2,
    rutaGrupo3, rutaGrupo4, rutaGrupo5,
    rutaGrupo6, rutaGrupo7, rutaGrupo8,
    rutaGrupo9, rutaGrupo10, rutaGrupo11,
    rutaGrupo12, rutaGrupo13, rutaGrupo14,
    rutaGrupo15, rutaGrupo16, rutaGrupo17,
    rutaGrupo18, rutaGrupo19, rutaGrupo20,
    rutaGrupo21
];

var secretos = [
    ["proyecto", "de", "grado 2"], /*0. esquema*/
    ["impreso", "molde", "digital"], /*1. produccion*/
    ["pago", "entrega", "experiencia"], /*2. adquisicion*/
    ["efectiva", "ágil", "gestionable"], /*3. distribución*/
    ["seguro", "ensamble", "simple"], /*4. instalacion*/
    ["optimo", "rendimiento", "consistente"], /*5. usabilidad*/
    ["conectado", "confiable", "eficaz"], /*6. conectividad*/
    ["patrones", "color", "estilo"], /*7. visualizacion*/
    ["flexible", "ligero", "modular"], /*8. mantenimiento*/
    ["cuidado", "planeta", "naturaleza"], /*9. diposicion*/
    ["deseable", "factible", "viable"] /*10. integración*/
];


var enlacesPistas = [
    "https://goo.gl/forms/Qa3xej9wPQXgt4Fi1" /* 0 */ ,
    "https://goo.gl/forms/0KPxLIhR2a2woSYh2" /* 1 */ ,
    "https://goo.gl/forms/PIzpdq5by7tFe6wl2" /* 2 */ ,
    "https://goo.gl/forms/Ce7rnLtU7RoQcvjB2" /* 3 */ ,
    "https://goo.gl/forms/LcfW7xpGSDSN08ni2" /* 4 */ ,
    "https://goo.gl/forms/FlnyJ9l7rHJpThbG3" /* 5 */ ,
    "https://goo.gl/forms/daRDSS4bqMwIN3kf2" /* 6 */ ,
    "https://goo.gl/forms/SJ8kQW17KEuGLnGI2" /* 7 */ ,
    "https://goo.gl/forms/i4I7Di50EjBDachx1" /* 8 */ ,
    "https://goo.gl/forms/Fw4dUYhQXvhFOL8d2" /* 9 */ ,
    "https://goo.gl/forms/uEiJ6HByRW4oCgaA3" /* 10 */ ,
];

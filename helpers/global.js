var places = [
"BIENVENIDO A LA YINCANA", /*0*/
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

var teams = [ 
/*0*/ "profes",
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
/*11*/ "Residuos Orgánicos",
/*12*/ "E-commerce",
/*13*/ "Manicuristas",
/*14*/ "Ornitología",
/*15*/ "Para-power lifting",
/*16*/ "Procastinación",
/*17*/ "Valle del Lili",
/*18*/ "AR HITO"
];

var secretos = [ 
    ["X","Y","Z"],/*0*/
    ["impreso", "molde", "digital"],/*1. Fabricación Rápida*/
    ["entradas", "procesos", "salidas"],/*2. Paramétrico*/
    ["fabrica","producto","gestionable"],/*3. Manufactura*/
    ["seguro","ensamble","simple"],/*4. Montaje*/
    ["optimo","rendimiento","consistente"],/*5. Logística*/
    ["resistente","reparable","eficaz"],/*6. Calidad*/
    ["confiable","oportuno","efectivo"],/*7. Servicio*/
    ["flexible","ligero","modular"],/*8. Desmontaje*/
    ["naturaleza","planeta","silvestre"] /*9. Medio Ambiente*/
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
var rutaGrupo12 = [0, 3, 4, 5, 6, 7, 8, 9, 1, 2, 10];
var rutaGrupo13 = [0, 4, 5, 6, 7, 8, 9, 1, 2, 3, 10];
var rutaGrupo14 = [0, 5, 6, 7, 8, 9, 1, 2, 3, 4, 10];
var rutaGrupo15 = [0, 6, 7, 8, 9, 1, 2, 3, 4, 5, 10];
var rutaGrupo16 = [0, 7, 8, 9, 1, 2, 3, 4, 5, 6, 10];
var rutaGrupo17 = [0, 8, 9, 1, 2, 3, 4, 5, 6, 7, 10];
var rutaGrupo18 = [0, 9, 1, 2, 3, 4, 5, 6, 7, 8, 10];

var rutas = [
    rutaGrupo0,
    rutaGrupo1,
    rutaGrupo2,
    rutaGrupo3,
    rutaGrupo4,
    rutaGrupo5,
    rutaGrupo6,
    rutaGrupo7,
    rutaGrupo8,
    rutaGrupo9,
    rutaGrupo10,
    rutaGrupo11,
    rutaGrupo12,
    rutaGrupo13,
    rutaGrupo14,
    rutaGrupo15,
    rutaGrupo16,
    rutaGrupo17,
    rutaGrupo18,
];

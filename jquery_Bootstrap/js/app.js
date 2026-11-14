/*
========================================================
DASHBOARD OAXACA
Archivo: app.js
========================================================

OBJETIVO

Este archivo contiene toda la lógica
de interacción del Dashboard.

Aquí es donde realmente trabajaremos
con jQuery.

TEMAS QUE SE EXPLICARÁN

1. $(document).ready()
2. Selectores
3. Manipulación del DOM
4. Manipulación CSS
5. Eventos
6. Efectos
7. Chart.js
8. jQCloud

========================================================
*/


/*
========================================================
DOCUMENT READY
========================================================

Es la instrucción más importante
de jQuery para comenzar.

Significado:

"Ejecuta el código únicamente cuando
el HTML ya haya terminado de cargarse".

Evita errores cuando intentamos
acceder a elementos que todavía
no existen.

========================================================
*/

$(document).ready(function () {

    console.log("Dashboard Oaxaca cargado correctamente");


    /*
    ====================================================
    MENSAJE DE BIENVENIDA
    ====================================================

    Manipulación del DOM mediante:

    .append()

    agrega contenido HTML al documento.

    ====================================================
    */

    $("footer").append(
        "<br><small>" + mensajes.bienvenida + "</small>"
    );


    /*
    ====================================================
    EFECTO DE APARICIÓN
    ====================================================

    fadeIn()

    Hace que un elemento aparezca
    progresivamente.

    ====================================================
    */

    $(".dashboard-card")
        .hide()
        .fadeIn(1500);


    /*
    ====================================================
    CREAR GRÁFICAS
    ====================================================
    */

    crearGraficaSexo();

    crearGraficaEdad();

    crearNubePalabras();


    /*
    ====================================================
    EVENTO CLICK
    ====================================================

    Cuando el usuario haga clic
    en el botón.

    ====================================================
    */

    $("#btnTema").click(function () {

        cambiarTema();

    });


    /*
    ====================================================
    EVENTO CLICK
    ====================================================
    */

    $("#btnResaltar").click(function () {

        resaltarGraficas();

    });


    /*
    ====================================================
    EVENTO CLICK
    ====================================================
    */

    $("#btnInterpretacion").click(function () {

        mostrarInterpretacion();

    });


    /*
    ====================================================
    EVENTO MOUSEENTER
    ====================================================

    Cuando el cursor entra
    a una tarjeta.

    ====================================================
    */

    $(".dashboard-card").mouseenter(function () {

        $(this).addClass("shadow-lg");

    });


    /*
    ====================================================
    EVENTO MOUSELEAVE
    ====================================================

    Cuando el cursor sale.

    ====================================================
    */

    $(".dashboard-card").mouseleave(function () {

        $(this).removeClass("shadow-lg");

    });

});


/*
========================================================
FUNCIÓN
CAMBIAR TEMA
========================================================

Temas explicados:

Selector ID

$("#btnTema")

Manipulación de clases

.toggleClass()

========================================================
*/

function cambiarTema() {

    $(".dashboard-card")
        .toggleClass("tema-oaxaca");

    alert(mensajes.tema);

}


/*
========================================================
FUNCIÓN
RESALTAR GRÁFICAS
========================================================

Temas explicados:

Selectores

Manipulación CSS

========================================================
*/

function resaltarGraficas() {

    $(".dashboard-card")
        .toggleClass("destacado");

}


/*
========================================================
FUNCIÓN
MOSTRAR INTERPRETACIÓN
========================================================

slideToggle()

Uno de los efectos clásicos
de jQuery.

========================================================
*/

function mostrarInterpretacion() {

    $("#acordeonDashboard")
        .slideToggle(800);

}


/*
========================================================
GRÁFICA DE PASTEL
========================================================

Chart.js

Muestra:

Hombres
Mujeres

========================================================
*/

function crearGraficaSexo() {

    const ctx =
        document.getElementById("graficaSexo");

    new Chart(ctx, {

        type: "pie",

        data: {

            labels: [

                "Hombres",

                "Mujeres"

            ],

            datasets: [{

                data: [

                    poblacionSexo.hombres,

                    poblacionSexo.mujeres

                ],

                backgroundColor: [

                    coloresDashboard.azul,

                    coloresDashboard.rojo

                ]

            }]

        },

        options: configuracionGeneralCharts

    });

}


/*
========================================================
GRÁFICA DE BURBUJAS
========================================================

Bubble Chart

Cada burbuja representa
un grupo de edad.

x = posición horizontal

y = valor

r = radio de la burbuja

========================================================
*/

function crearGraficaEdad() {

    const datosBubble = [];

    /*
    Recorremos el arreglo
    utilizando un ciclo.

    forEach()

    ejecuta una función para
    cada elemento.

    */

    poblacionEdad.forEach(function (item, indice) {

        datosBubble.push({

            x: indice + 1,

            y: item.habitantes,

            r: Math.max(5, item.habitantes / 20000)

        });

    });

    const ctxEdad =
        document.getElementById("graficaEdad");

    new Chart(ctxEdad, {

        type: "bubble",

        data: {

            datasets: [{

                label: "Población por edad",

                data: datosBubble,

                backgroundColor:
                    "rgba(13,110,253,0.6)"

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    position: "bottom"

                }

            },

            scales: {

                x: {

                    title: {

                        display: true,

                        text: "Grupo de edad"

                    }

                },

                y: {

                    title: {

                        display: true,

                        text: "Habitantes"

                    }

                }

            }

        }

    });

}


/*
========================================================
NUBE DE PALABRAS
========================================================

jQCloud

Las palabras más importantes
aparecerán más grandes.

weight

↓

Controla el tamaño.

========================================================
*/

function crearNubePalabras() {

    $("#nubePalabras").jQCloud(

        problemasSociales,

        {

            autoResize: true

        }

    );

}


/*
========================================================
EJEMPLOS ADICIONALES DE SELECTORES
========================================================

NO SON NECESARIOS PARA FUNCIONAR.

Se dejan con fines didácticos.

========================================================
*/

/*

Selector por ID

$("#graficaSexo")

Busca:

id="graficaSexo"

*/


/*

Selector por clase

$(".dashboard-card")

Busca:

class="dashboard-card"

*/


/*

Selector por etiqueta

$("canvas")

Selecciona todas las etiquetas
canvas del documento.

*/


/*
========================================================
EJEMPLOS DE MANIPULACIÓN DOM
========================================================

.text()

Reemplaza texto.

$("#titulo").text("Nuevo texto");


.html()

Reemplaza HTML.

$("#titulo")
.html("<b>Nuevo texto</b>");


.append()

Agrega contenido.

$("body")
.append("<p>Hola</p>");

========================================================
*/


/*
========================================================
EJEMPLOS DE MANIPULACIÓN CSS
========================================================

.css()

$("#titulo")
.css("color","red");


.addClass()

$("#titulo")
.addClass("destacado");


.removeClass()

$("#titulo")
.removeClass("destacado");


.toggleClass()

$("#titulo")
.toggleClass("destacado");

========================================================
*/


/*
========================================================
EJEMPLOS DE EFECTOS JQUERY
========================================================

.hide()

Oculta un elemento.


.show()

Muestra un elemento.


.fadeIn()

Aparece suavemente.


.fadeOut()

Desaparece suavemente.


.slideToggle()

Expande o contrae.


.animate()

Permite animaciones
personalizadas.

========================================================
*/


/*
========================================================
EJEMPLO DE ANIMATE
========================================================

Código de referencia.

No se ejecuta.

$("#panel")
.animate({

    width:"80%",

    opacity:0.5

},1000);

========================================================
*/


/*
========================================================
FIN DEL ARCHIVO
========================================================

RESUMEN

SELECTORES

$("#id")
$(".clase")
$("etiqueta")

DOM

.text()
.html()
.append()

CSS

.css()
.addClass()
.removeClass()
.toggleClass()

EVENTOS

.click()
.mouseenter()
.mouseleave()

EFECTOS

.fadeIn()
.slideToggle()

LIBRERÍAS UTILIZADAS

Bootstrap 5
jQuery 3.7.1
Chart.js
jQCloud

========================================================
*/
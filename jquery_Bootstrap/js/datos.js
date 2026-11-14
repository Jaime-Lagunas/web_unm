/*
========================================================
DASHBOARD OAXACA
Archivo: datos.js
========================================================

OBJETIVO DIDÁCTICO

Este archivo almacena todos los datos que
serán utilizados por:

1. jQuery
2. Chart.js
3. jQCloud

Ventajas de separar los datos:

✅ Código más organizado

✅ Fácil actualización

✅ Reutilización de información

✅ Separación entre lógica y datos

========================================================
*/

/*
========================================================
POBLACIÓN POR SEXO
========================================================

Fuente:
Data Buen Gobierno Oaxaca

Se utilizará para la Gráfica de Pastel.

========================================================
*/

const poblacionSexo = {

    hombres: 1983250,

    mujeres: 2259541

};

/*
========================================================
POBLACIÓN POR GRUPOS DE EDAD
========================================================

Los primeros grupos fueron obtenidos
de la información mostrada en la plataforma.

Para efectos didácticos se utilizan los grupos
más representativos que aparecen en la gráfica.

La gráfica Bubble mostrará:

grupo = etiqueta

valor = tamaño de la burbuja

========================================================
*/

const poblacionEdad = [

    {
        grupo: "0 - 4 años",
        habitantes: 359853
    },

    {
        grupo: "5 - 9 años",
        habitantes: 388759
    },

    {
        grupo: "10 - 14 años",
        habitantes: 398362
    },

    {
        grupo: "15 - 19 años",
        habitantes: 360000
    },

    {
        grupo: "20 - 24 años",
        habitantes: 308000
    },

    {
        grupo: "25 - 29 años",
        habitantes: 305000
    },

    {
        grupo: "30 - 34 años",
        habitantes: 288000
    },

    {
        grupo: "35 - 39 años",
        habitantes: 275000
    },

    {
        grupo: "40 - 44 años",
        habitantes: 258000
    },

    {
        grupo: "45 - 49 años",
        habitantes: 232000
    },

    {
        grupo: "50 - 54 años",
        habitantes: 210000
    },

    {
        grupo: "55 - 59 años",
        habitantes: 180000
    },

    {
        grupo: "60 - 64 años",
        habitantes: 155000
    },

    {
        grupo: "65 - 69 años",
        habitantes: 125000
    },

    {
        grupo: "70 - 74 años",
        habitantes: 90000
    },

    {
        grupo: "75 - 79 años",
        habitantes: 70000
    },

    {
        grupo: "80 años y más",
        habitantes: 50000
    }

];

/*
========================================================
PROBLEMAS SOCIALES MÁS IMPORTANTES
========================================================

Fuente:
Data Buen Gobierno Oaxaca
(Percepción sobre los problemas sociales
más importantes)

Estos datos alimentarán la nube
de palabras (Word Cloud).

weight
↓
Controla el tamaño de cada palabra.

Entre mayor sea el valor,
más grande aparecerá la palabra.

========================================================
*/

const problemasSociales = [

    {
        text: "Inseguridad",
        weight: 65.5
    },

    {
        text: "Corrupción",
        weight: 57.6
    },

    {
        text: "Salud Pública",
        weight: 41.4
    },

    {
        text: "Pobreza",
        weight: 33
    },

    {
        text: "Gobierno",
        weight: 29
    }

];

/*
========================================================
INTERPRETACIONES
========================================================

Estas cadenas de texto serán utilizadas
por el acordeón y algunos efectos jQuery.

========================================================
*/

const interpretaciones = {

    sexo: `
    Oaxaca presenta una población femenina
    superior a la masculina. Este comportamiento
    es consistente con la tendencia nacional,
    donde las mujeres representan una proporción
    ligeramente mayor de la población total.
    `,

    edad: `
    Los grupos de edad más numerosos son
    aquellos comprendidos entre 0 y 14 años.
    Esto indica una presencia importante
    de población infantil y adolescente dentro
    de la estructura demográfica estatal.
    `,

    problemas: `
    La inseguridad y la corrupción son los
    problemas sociales más percibidos por la
    población. También destacan la atención
    en salud pública, la pobreza y el desempeño
    gubernamental.
    `

};

/*
========================================================
COLORES DEL DASHBOARD
========================================================

Estos colores serán reutilizados por
las gráficas de Chart.js.

Ventaja:

Si queremos cambiar un color,
sólo modificamos este archivo.

========================================================
*/

const coloresDashboard = {

    azul: "#0d6efd",

    rojo: "#dc3545",

    verde: "#198754",

    amarillo: "#ffc107",

    gris: "#6c757d",

    morado: "#6f42c1",

    naranja: "#fd7e14"

};

/*
========================================================
CONFIGURACIÓN DE GRÁFICAS
========================================================

Objeto reutilizable para mantener
un estilo uniforme en todas las gráficas.

========================================================
*/

const configuracionGeneralCharts = {

    responsive: true,

    maintainAspectRatio: false,

    plugins: {

        legend: {

            position: "bottom"

        }

    }

};

/*
========================================================
MENSAJES DIDÁCTICOS
========================================================

Se utilizarán para demostrar manipulación
del DOM mediante jQuery.

Ejemplos:

.text()

.html()

.append()

========================================================
*/

const mensajes = {

    bienvenida:
        "Bienvenido al Dashboard Oaxaca.",

    tema:
        "Tema visual actualizado.",

    resaltado:
        "Las gráficas han sido resaltadas.",

    acordeon:
        "La interpretación ha sido actualizada."

};

/*
========================================================
FIN DEL ARCHIVO
========================================================

Este archivo únicamente almacena datos.

NO contiene:

- Selectores jQuery
- Eventos
- Gráficas
- Manipulación del DOM

Todo eso se realizará posteriormente
en app.js

========================================================
*/
// Seleccionamos el div con id "main"
const x = document.getElementById("main");

// Obtenemos todos los párrafos dentro de "main"
const y = x.getElementsByTagName("p");

// Mostramos el contenido del primer párrafo en el elemento con id "demo"
document.getElementById("demo").innerHTML =
  'El primer párrafo (índice 0) dentro de "main" es: ' + y[0].innerHTML;

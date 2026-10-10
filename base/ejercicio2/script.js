// Obtenemos todos los elementos con la clase "intro"
const x = document.getElementsByClassName("intro");

// Mostramos el contenido del primer párrafo con esa clase en el elemento con id "demo"
document.getElementById("demo").innerHTML =
  'El primer párrafo (índice 0) con class="intro" es: ' + x[0].innerHTML;

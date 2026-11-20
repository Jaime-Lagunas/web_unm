/* ==========================================================================
   MÓDULO DE PERFIL VISUAL (COLOR Y FUENTE) + WIDGET GRATUITO DE GOOGLE TRANSLATE
   --------------------------------------------------------------------------
   1. Perfil de Color y Tipo de Fuente:
      - Implementado con variables CSS y selectores/eventos de jQuery (Tema 5),
        guardando la elección en localStorage para conservar el perfil al
        navegar entre las 3 páginas del sitio.
      - Puede complementarse con Google Fonts (librería gratuita de fuentes)
        o jQuery Color.
   2. Traducción Automática de TODA la Página (Español / Inglés / Francés):
      - Se utiliza el Widget Gratuito Oficial de Google Translate:
        https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit
      - Configurado con `pageLanguage: 'es'` e `includedLanguages: 'es,en,fr'`
        para traducir automáticamente TODO el texto visible del documento HTML
        completo (menús, párrafos, botones, tarjetas, formularios y pie de página).
   ========================================================================== */

// Función global requerida por el script oficial de Google Translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'es',          // Idioma original del sitio web (Español)
      includedLanguages: 'es,en,fr', // Idiomas disponibles: Español, Inglés y Francés
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
    },
    'google_translate_element'   // ID del contenedor <div> en la barra de navegación
  );
}

$(function() {
  // Configuración de perfiles de color y tipografía
  const PERFILES_COLOR = ["", "perfil-color-matcha", "perfil-color-noche"];
  const NOMBRES_COLOR = ["Café Clásico", "Matcha Natural", "Modo Noche"];

  const PERFILES_FUENTE = ["", "fuente-serif", "fuente-mono"];
  const NOMBRES_FUENTE = ["Sans-Serif", "Serif Editorial", "Monospace"];

  let idxColor = parseInt(localStorage.getItem("perfilColorIdx") || "0", 10);
  let idxFuente = parseInt(localStorage.getItem("perfilFuenteIdx") || "0", 10);

  function aplicarColor(index) {
    $("body").removeClass(PERFILES_COLOR.filter(Boolean).join(" "));
    if (PERFILES_COLOR[index]) {
      $("body").addClass(PERFILES_COLOR[index]);
    }
    $("#btn-cambiar-color").attr("title", "Perfil de color: " + NOMBRES_COLOR[index]);
    localStorage.setItem("perfilColorIdx", index);
  }

  function aplicarFuente(index) {
    $("body").removeClass(PERFILES_FUENTE.filter(Boolean).join(" "));
    if (PERFILES_FUENTE[index]) {
      $("body").addClass(PERFILES_FUENTE[index]);
    }
    $("#btn-cambiar-fuente").attr("title", "Tipo de fuente: " + NOMBRES_FUENTE[index]);
    localStorage.setItem("perfilFuenteIdx", index);
  }

  // Botón 1: Ciclar perfil de color del sitio
  $("#btn-cambiar-color").on("click", function() {
    idxColor = (idxColor + 1) % PERFILES_COLOR.length;
    aplicarColor(idxColor);
  });

  // Botón 2: Ciclar tipo de fuente del sitio
  $("#btn-cambiar-fuente").on("click", function() {
    idxFuente = (idxFuente + 1) % PERFILES_FUENTE.length;
    aplicarFuente(idxFuente);
  });

  // Restaurar preferencias de color y fuente al cargar cada página
  aplicarColor(idxColor);
  aplicarFuente(idxFuente);
});

/* ==========================================================================
   MÓDULO DE PERFIL VISUAL (COLOR Y FUENTE) + TRADUCCIÓN ES / EN / FR
   --------------------------------------------------------------------------
   - Perfil de Color y Tipo de Fuente: Implementado con variables CSS y
     selectores/eventos de jQuery (Tema 5), guardando la preferencia en
     localStorage. También puedes apoyarte en librerías gratuitas como
     Google Fonts (para fuentes web gratuitas) o jQuery Color / CSS variables.
   - Traducción Automática (Español / Inglés / Francés): Implementado aquí
     con diccionarios + eventos jQuery para funcionar sin depender de
     servicios externos bloqueados. Si deseas traducción automática dinámica
     mediante librerías/widgets gratuitos, puedes integrar el widget gratuito
     de Google Translate (translate.google.com) o bibliotecas i18next /
     jquery.i18n (MIT/Apache, gratuitas).
   ========================================================================== */
$(function() {
  const PERFILES_COLOR = ["", "perfil-color-matcha", "perfil-color-noche"];
  const NOMBRES_COLOR = ["Café Clásico", "Matcha Natural", "Modo Noche"];

  const PERFILES_FUENTE = ["", "fuente-serif", "fuente-mono"];
  const NOMBRES_FUENTE = ["Sans-Serif", "Serif Editorial", "Monospace"];

  const IDIOMAS = ["es", "en", "fr"];
  const ETIQUETAS_IDIOMA = {
    es: "🌐 ES → EN/FR",
    en: "🌐 EN (Switch FR)",
    fr: "🌐 FR (Switch ES)"
  };

  // Diccionario de traducciones ES -> EN / FR para los textos clave del sitio
  const TRADUCCIONES = {
    en: {
      "Café de Especialidad y Repostería Artesanal": "Specialty Coffee & Artisanal Pastry",
      "Nuestros Servicios": "Our Services",
      "Arma tu Combo Matutino (Arrastra y Suelta)": "Build Your Morning Combo (Drag & Drop)",
      "Menú de Bebidas y Especialidades": "Drinks & Specialties Menu",
      "Tu Orden Seleccionada (Arrastra para Reordenar)": "Your Selected Order (Drag to Reorder)",
      "Preguntas Frecuentes sobre el Menú": "Menu Frequently Asked Questions",
      "Reserva tu Mesa": "Book Your Table",
      "Ubicación en Google Maps": "Google Maps Location"
    },
    fr: {
      "Café de Especialidad y Repostería Artesanal": "Café de Spécialité & Pâtisserie Artisanale",
      "Nuestros Servicios": "Nos Services",
      "Arma tu Combo Matutino (Arrastra y Suelta)": "Composez Votre Formule Matinale (Glisser-Déposer)",
      "Menú de Bebidas y Especialidades": "Carte des Boissons & Spécialités",
      "Tu Orden Seleccionada (Arrastra para Reordenar)": "Votre Commande Sélectionnée (Glisser pour Réorganiser)",
      "Preguntas Frecuentes sobre el Menú": "Questions Fréquentes sur la Carte",
      "Reserva tu Mesa": "Réserver une Table",
      "Ubicación en Google Maps": "Localisation sur Google Maps"
    }
  };

  let idxColor = parseInt(localStorage.getItem("perfilColorIdx") || "0", 10);
  let idxFuente = parseInt(localStorage.getItem("perfilFuenteIdx") || "0", 10);
  let idxIdioma = parseInt(localStorage.getItem("idiomaIdx") || "0", 10);

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

  function aplicarIdioma(index) {
    const lang = IDIOMAS[index];
    $("#btn-traducir-idioma").text(ETIQUETAS_IDIOMA[lang]);
    $("html").attr("lang", lang);

    // Guarda el texto original en español la primera vez que se traduce
    $("h1, h2").each(function() {
      const $el = $(this);
      if (!$el.data("esTexto")) {
        $el.data("esTexto", $el.text().trim());
      }
      const original = $el.data("esTexto");
      if (lang === "es") {
        $el.text(original);
      } else if (TRADUCCIONES[lang] && TRADUCCIONES[lang][original]) {
        $el.text(TRADUCCIONES[lang][original]);
      }
    });

    localStorage.setItem("idiomaIdx", index);
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

  // Botón 3: Traducir automáticamente entre Español, Inglés y Francés
  $("#btn-traducir-idioma").on("click", function() {
    idxIdioma = (idxIdioma + 1) % IDIOMAS.length;
    aplicarIdioma(idxIdioma);
  });

  // Restaurar preferencias guardadas al cargar cada página
  aplicarColor(idxColor);
  aplicarFuente(idxFuente);
  aplicarIdioma(idxIdioma);
});

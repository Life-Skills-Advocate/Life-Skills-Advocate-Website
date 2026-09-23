(function () {
  "use strict";
  /* ---- Footer year ---- */
  var copyYearEl = document.getElementById("copyYear");
  if (copyYearEl) {
    copyYearEl.textContent = new Date().getFullYear();
  }

  /* ---- Sticky header shrink on scroll ---- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile nav toggle ---- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  var navScrim = document.getElementById("navScrim");

  function closeNav() {
    if (!mainNav || !navScrim || !navToggle) return;
    mainNav.classList.remove("open");
    navScrim.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.querySelectorAll(".main-nav li.open").forEach(function (li) {
      li.classList.remove("open");
    });
  }

  function toggleNav() {
    if (!mainNav || !navScrim || !navToggle) return;
    var isOpen = mainNav.classList.toggle("open");
    navScrim.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  }

  if (navToggle && navScrim) {
    navToggle.addEventListener("click", toggleNav);
    navScrim.addEventListener("click", closeNav);
  }

  /* ---- Mobile accordion for dropdown items ---- */
  document
    .querySelectorAll(".nav-top-link, .nav-sub-toggle")
    .forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        if (window.innerWidth > 1023) return; // desktop uses hover

        var li = btn.closest("li");
        var hasDropdown = li.querySelector(":scope > .dropdown");

        if (!hasDropdown) return;

        // Si es un enlace <a> y el clic NO fue exactamente en la flechita (.caret)
        // dejamos que el enlace funcione con normalidad y aborte esta función.
        if (btn.tagName.toLowerCase() === "a" && !e.target.closest(".caret")) {
          return;
        }

        // Si es un botón o si hicieron clic en la flechita, evitamos navegar y abrimos el menú
        e.preventDefault();
        var wasOpen = li.classList.contains("open");
        li.classList.toggle("open", !wasOpen);
      });
    });

  /* ---- Close mobile nav on link click ---- */
  document.querySelectorAll(".main-nav a").forEach(function (a) {
    a.addEventListener("click", function (e) {
      if (window.innerWidth > 1023) return;

      // Si el usuario hizo clic en la flechita (.caret) para abrir un submenú,
      // NO cerramos el menú lateral.
      if (e.target.closest(".caret")) {
        return;
      }

      // Si hizo clic en el texto del enlace (cualquiera de ellos),
      // el enlace va a navegar a su URL, así que cerramos la barra lateral.
      closeNav();
    });
  });
})();

// #region Header JS
//header visible hidden
document.addEventListener("DOMContentLoaded", () => {
  const siteHeader = document.getElementById("siteHeader");
  const headerTop = document.querySelector(".header-top");

  const navScrim = document.querySelector(".nav-scrim");
  const mainNav = document.querySelector(".main-nav");
  let ultimoScroll = window.scrollY;

  // 1. Función para medir la altura exacta del .header-top
  function actualizarAlturaTop() {
    if (headerTop && siteHeader) {
      // Calculamos la altura en píxeles mas margenes y paddings
      margins =
        parseFloat(getComputedStyle(headerTop).marginTop) +
        parseFloat(getComputedStyle(headerTop).marginBottom);
      paddings =
        parseFloat(getComputedStyle(headerTop).paddingTop) +
        parseFloat(getComputedStyle(headerTop).paddingBottom);
      var margenManual = 10; // Ajusta este valor según sea necesario
      const altura = headerTop.offsetHeight + margins + paddings + margenManual;
      // Se la pasamos a la variable CSS del header
      siteHeader.style.setProperty("--top-height", `${altura}px`);
    }
  }

  // Calculamos al cargar la página y por si el usuario gira el móvil o achica la ventana
  actualizarAlturaTop();
  window.addEventListener("resize", actualizarAlturaTop);

  // 2. Lógica del Scroll
  window.addEventListener("scroll", () => {
    const scrollActual = window.scrollY;

    // Si bajamos, y ya pasamos la altura inicial (para que no titile arriba del todo)
    if (scrollActual > ultimoScroll && scrollActual > 100) {
      siteHeader.classList.add("hide-top");
      navScrim.classList.remove("open");
      mainNav.classList.remove("open");
    }
    // Si subimos
    else if (scrollActual < ultimoScroll) {
      siteHeader.classList.remove("hide-top");
      navScrim.classList.remove("open");
      mainNav.classList.remove("open");
    }

    ultimoScroll = scrollActual;
  });
});
// #endregion Header JS

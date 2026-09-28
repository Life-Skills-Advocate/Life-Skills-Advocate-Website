(function () {
  "use strict";

  /* ---- Footer year ---- */
  var copyYearEl = document.getElementById("copyYear");
  if (copyYearEl) {
    copyYearEl.textContent = new Date().getFullYear();
  }

  /* ---- Team photo carousel ---- */
  var track = document.getElementById("carouselTrack");
  var dotsWrap = document.getElementById("carouselDots");

  if (track && dotsWrap) {
    var slides = track.querySelectorAll(".carousel-slide");
    var index = 0;

    slides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.setAttribute("aria-label", "Go to slide " + (i + 1));
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", function () {
        goTo(i);
      });
      dotsWrap.appendChild(dot);
    });

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = "translateX(-" + index * 100 + "%)";
      dotsWrap.querySelectorAll("button").forEach(function (d, di) {
        d.classList.toggle("active", di === index);
      });
    }

    var timer = setInterval(function () {
      goTo(index + 1);
    }, 4500);

    var carouselParent = track.closest(".carousel");
    if (carouselParent) {
      carouselParent.addEventListener("mouseenter", function () {
        clearInterval(timer);
      });
      carouselParent.addEventListener("mouseleave", function () {
        timer = setInterval(function () {
          goTo(index + 1);
        }, 4500);
      });

      var prevArrow = carouselParent.querySelector(".prev-arrow");
      var nextArrow = carouselParent.querySelector(".next-arrow");

      if (prevArrow) {
        prevArrow.addEventListener("click", function () {
          goTo(index - 1);
        });
      }

      if (nextArrow) {
        nextArrow.addEventListener("click", function () {
          goTo(index + 1);
        });
      }
    }
  }
})();

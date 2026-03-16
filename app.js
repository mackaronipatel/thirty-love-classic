/* ===== THE THIRTY-LOVE CLASSIC — JavaScript ===== */

(function () {
  "use strict";

  /* --- Countdown Timer --- */
  const TARGET_DATE = new Date("2026-07-09T14:00:00-07:00");

  function updateCountdown() {
    const now = new Date();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      document.getElementById("countDays").textContent = "0";
      document.getElementById("countHours").textContent = "0";
      document.getElementById("countMinutes").textContent = "0";
      document.getElementById("countSeconds").textContent = "0";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countDays").textContent = days;
    document.getElementById("countHours").textContent = hours;
    document.getElementById("countMinutes").textContent = minutes;
    document.getElementById("countSeconds").textContent = seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* --- Schedule Tabs --- */
  var tabs = document.querySelectorAll(".schedule__tab");
  var days = document.querySelectorAll(".schedule__day");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var dayId = this.getAttribute("data-day");

      tabs.forEach(function (t) {
        t.classList.remove("schedule__tab--active");
      });
      this.classList.add("schedule__tab--active");

      days.forEach(function (d) {
        d.classList.remove("schedule__day--active");
      });
      document.getElementById(dayId).classList.add("schedule__day--active");
    });
  });

  /* --- FAQ Accordion --- */
  var faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq__question");
    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("faq__item--open");

      // Close all
      faqItems.forEach(function (i) {
        i.classList.remove("faq__item--open");
        i.querySelector(".faq__question").setAttribute("aria-expanded", "false");
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add("faq__item--open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* --- Mobile Navigation --- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("nav__links--open");
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("nav__links--open");
      });
    });
  }

  /* --- Smooth scroll for nav links --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* --- Scroll-based nav shadow --- */
  var nav = document.getElementById("nav");
  var lastScroll = 0;

  window.addEventListener(
    "scroll",
    function () {
      var currentScroll = window.pageYOffset;

      if (currentScroll > 60) {
        nav.style.boxShadow = "0 1px 8px rgba(44,44,44,0.08)";
      } else {
        nav.style.boxShadow = "none";
      }

      lastScroll = currentScroll;
    },
    { passive: true }
  );
})();

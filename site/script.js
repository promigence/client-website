/* ============================================================
   Shivayu Aerospace: interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---- Year ---- */
  var nowYear = new Date().getFullYear();
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = nowYear;
  var auditEl = document.getElementById("auditYear");
  if (auditEl) auditEl.textContent = "OCT " + nowYear;

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");
  var icon = document.getElementById("navIcon");
  function closeMenu() {
    menu.classList.remove("open");
    if (icon) icon.textContent = "menu";
    toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      if (icon) icon.textContent = open ? "close" : "menu";
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  /* ---- Reveal on scroll ---- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Contact form -> mailto ---- */
  var form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var note = document.getElementById("formNote");
      var subject = encodeURIComponent("RFQ / Enquiry: " + (form.name.value || ""));
      var body = encodeURIComponent(
        "Name: " + form.name.value + "\n" +
        "Organisation: " + (form.org.value || "") + "\n" +
        "Email: " + form.email.value + "\n" +
        "Phone: " + (form.phone.value || "") + "\n\n" +
        form.message.value
      );
      if (note) note.hidden = false;
      window.location.href =
        "mailto:inquiry@shivayuaerospace.com?subject=" + subject + "&body=" + body;
    });
  }
})();

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

  /* ---- Count-up on reveal ---- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-target"));
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals);
    }
    requestAnimationFrame(step);
  }
  var counts = document.querySelectorAll(".count");
  if ("IntersectionObserver" in window && !reduce) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counts.forEach(function (el) { cio.observe(el); });
  } else {
    counts.forEach(function (el) {
      el.textContent = parseFloat(el.getAttribute("data-target")).toFixed(parseInt(el.getAttribute("data-decimals") || "0", 10));
    });
  }

  /* ---- Scroll progress bar + back-to-top + scrollspy ---- */
  var progress = document.getElementById("scrollProgress");
  var toTop = document.getElementById("toTop");
  var spyLinks = Array.prototype.slice.call(document.querySelectorAll('header nav a[href^="#"]'));
  var sections = spyLinks.map(function (a) { return document.querySelector(a.getAttribute("href")); });

  var parallaxEls = reduce ? [] : Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));

  var ticking = false;
  function onScrollFx() {
    var st = window.scrollY || document.documentElement.scrollTop;
    var docH = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (docH > 0 ? (st / docH) * 100 : 0) + "%";
    if (toTop) toTop.classList.toggle("show", st > 600);

    for (var p = 0; p < parallaxEls.length; p++) {
      var pe = parallaxEls[p];
      var pr = pe.parentElement.getBoundingClientRect();
      var center = pr.top + pr.height / 2 - window.innerHeight / 2;
      pe.style.transform = "translateY(" + (center * -0.08) + "px)";
    }

    var idx = -1, mid = st + window.innerHeight * 0.35;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i] && sections[i].offsetTop <= mid) idx = i;
    }
    spyLinks.forEach(function (a, i) { a.classList.toggle("nav-active", i === idx); });
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { window.requestAnimationFrame(onScrollFx); ticking = true; }
  }, { passive: true });
  onScrollFx();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
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
        "mailto:sales@shivayuaerospace.com?subject=" + subject + "&body=" + body;
    });
  }
})();

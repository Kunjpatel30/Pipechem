/* ============================================================
   PIPE CHEM — Shared Components JS
   Header, Footer, Navigation, Utilities
   ============================================================ */

(function () {
  'use strict';

  /* ─── Detect base path ─── */
  function getBase() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (path.includes('/products/')) return '../';
    return './';
  }
  const BASE = getBase();

  /* ─── Header HTML ─── */
  function headerHTML() {
    return `
<header class="site-header" id="site-header">
  <div class="header-inner">
    <a href="${BASE}index.html" class="site-logo">
      <img src="${BASE}assets/images/logo.png" alt="PIPE CHEM Logo" id="header-logo">
    </a>
    <div class="header-right">
      <div class="hamburger" id="hamburger" role="button" aria-label="Open navigation" tabindex="0">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
</header>

<div class="nav-backdrop" id="nav-backdrop"></div>

<nav class="site-nav" id="site-nav" aria-label="Main navigation">
  <div class="nav-top">
    <a href="${BASE}index.html" class="nav-logo">
      <img src="${BASE}assets/images/logo.png" alt="PIPE CHEM" style="height:42px;">
    </a>
    <button class="nav-close-btn" id="nav-close" aria-label="Close navigation">✕</button>
  </div>
  <div class="nav-body">
    <ul>
      <li class="nav-item">
        <a href="${BASE}about.html" class="nav-link">About</a>
      </li>
      <li class="nav-item has-sub" id="products-menu-item">
        <div class="nav-link" id="products-toggle">
          Products
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="nav-sub" id="products-sub">
          <a href="${BASE}products/hydrochloric-acid.html">Hydrochloric Acid</a>
          <a href="${BASE}products/sulphuric-acid.html">Dilute Sulphuric Acid</a>
          <a href="${BASE}products/nitric-acid.html">Dilute Nitric Acid</a>
          <a href="${BASE}products/sodium-sulphate.html">Sodium Sulphate</a>
          <a href="${BASE}products/phosphoric-acid.html">Phosphoric Acid</a>
          <a href="${BASE}products/sodium-hypochlorite.html">Sodium Hypochlorite</a>
          <a href="${BASE}products/ferric-alum.html">Ferric Alum</a>
          <a href="${BASE}products/speciality-chemicals.html">Speciality Chemicals</a>
          <a href="${BASE}products/spent-solvents.html">Spent Solvents</a>
        </div>
      </li>
      <li class="nav-item">
        <a href="${BASE}experiences.html" class="nav-link">Experiences</a>
      </li>
      <li class="nav-item">
        <a href="${BASE}facilities.html" class="nav-link">Facilities</a>
      </li>
      <li class="nav-item">
        <a href="${BASE}inquiry.html" class="nav-link">Inquiry</a>
      </li>
      <li class="nav-item">
        <a href="${BASE}contact.html" class="nav-link">Contact Us</a>
      </li>
    </ul>
  </div>
  <div class="nav-bottom">
    <a href="${BASE}inquiry.html" class="btn btn-gold" style="width:100%;justify-content:center;border-radius:12px;">&#128203; Send Inquiry</a>
  </div>
</nav>`;
  }

  /* ─── Footer HTML ─── */
  function footerHTML() {
    return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-main">
      <div class="footer-brand">
        <img src="${BASE}assets/images/logo4.png" alt="PIPE CHEM">
        <p>A trusted chemical trading and supply firm committed to delivering quality industrial chemicals with reliability, integrity, and consistency since 2004.</p>
        <p style="color:rgba(255,255,255,.35);font-size:.78rem;margin-top:4px;">Sister Concern: <strong style="color:var(--gold)">MATANGI ENTERPRISE</strong> (Est. 2019)</p>
      </div>
      <div>
        <p class="footer-col-title">Quick Links</p>
        <ul class="footer-links">
          <li><a href="${BASE}about.html">▸ About Us</a></li>
          <li><a href="${BASE}products.html">▸ Our Products</a></li>
          <li><a href="${BASE}experiences.html">▸ Experiences</a></li>
          <li><a href="${BASE}facilities.html">▸ Facilities</a></li>
          <li><a href="${BASE}inquiry.html">▸ Inquiry</a></li>
          <li><a href="${BASE}contact.html">▸ Contact Us</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Products</p>
        <ul class="footer-links">
          <li><a href="${BASE}products/hydrochloric-acid.html">▸ Hydrochloric Acid</a></li>
          <li><a href="${BASE}products/sulphuric-acid.html">▸ Sulphuric Acid</a></li>
          <li><a href="${BASE}products/nitric-acid.html">▸ Nitric Acid</a></li>
          <li><a href="${BASE}products/sodium-sulphate.html">▸ Sodium Sulphate</a></li>
          <li><a href="${BASE}products/phosphoric-acid.html">▸ Phosphoric Acid</a></li>
          <li><a href="${BASE}products/sodium-hypochlorite.html">▸ Sodium Hypochlorite</a></li>
          <li><a href="${BASE}products/ferric-alum.html">▸ Ferric Alum</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Contact</p>
        <div class="footer-contact-row">
          <div class="ico">📞</div>
          <span>+91 9558821244<br>+91 9558821243</span>
        </div>
        <div class="footer-contact-row">
          <div class="ico">💬</div>
          <span>+91 78629 84082<br><span style="font-size:.72rem;color:rgba(255,255,255,.3)">WhatsApp</span></span>
        </div>
        <div class="footer-contact-row">
          <div class="ico">✉</div>
          <a href="mailto:pipechem2004@gmail.com">pipechem2004@gmail.com</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 PIPE CHEM. All Rights Reserved. Est. 2004 | GST Reg. Firm</p>
      <p class="footer-sister">A sister concern of <span>MATANGI ENTERPRISE</span></p>
    </div>
  </div>
</footer>`;
  }

  /* ─── Inject header & footer ─── */
  document.addEventListener('DOMContentLoaded', function () {
    var hPlaceholder = document.getElementById('header-inject');
    var fPlaceholder = document.getElementById('footer-inject');
    if (hPlaceholder) hPlaceholder.innerHTML = headerHTML();
    if (fPlaceholder) fPlaceholder.innerHTML = footerHTML();

    initHeader();
    initNav();
    initReveal();
    initCounters();
  });

  /* ─── Header scroll effect ─── */
  function initHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;

    function updateHeader() {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ─── Hamburger / Nav ─── */
  function initNav() {
    var hamburger = document.getElementById('hamburger');
    var nav = document.getElementById('site-nav');
    var backdrop = document.getElementById('nav-backdrop');
    var closeBtn = document.getElementById('nav-close');
    var prodToggle = document.getElementById('products-toggle');
    var prodSub = document.getElementById('products-sub');
    var prodItem = document.getElementById('products-menu-item');

    function openNav() {
      if (!nav) return;
      nav.classList.add('open');
      backdrop.classList.add('show');
      if (hamburger) hamburger.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeNav() {
      if (!nav) return;
      nav.classList.remove('open');
      backdrop.classList.remove('show');
      if (hamburger) hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', openNav);
    if (hamburger) hamburger.addEventListener('keydown', function (e) { if (e.key === 'Enter') openNav(); });
    if (closeBtn) closeBtn.addEventListener('click', closeNav);
    if (backdrop) backdrop.addEventListener('click', closeNav);

    if (prodToggle && prodSub) {
      prodToggle.addEventListener('click', function () {
        var open = prodSub.classList.toggle('open');
        if (prodItem) prodItem.classList.toggle('open', open);
      });
    }

    /* Mark active nav link */
    var path = window.location.pathname.replace(/\\/g, '/');
    var links = document.querySelectorAll('.nav-link, .nav-sub a');
    links.forEach(function (link) {
      var href = (link.getAttribute('href') || '').replace(/\\/g, '/');
      if (href && path.endsWith(href.split('/').pop())) {
        link.classList.add('is-active');
      }
    });
  }

  /* ─── Scroll Reveal ─── */
  function initReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach(function (el) { io.observe(el); });
  }

  /* ─── Counter Animation ─── */
  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var end = parseFloat(el.dataset.count);
        var plus = el.dataset.plus || '';
        var dur = 1800;
        var start = 0;
        var step = (end / dur) * 16;
        var timer = setInterval(function () {
          start += step;
          if (start >= end) { start = end; clearInterval(timer); }
          el.textContent = (Number.isInteger(end) ? Math.floor(start) : start.toFixed(1)) + plus;
        }, 16);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { io.observe(el); });
  }

  /* ─── Toast Utility (global) ─── */
  window.showToast = function (msg, type) {
    type = type || 'success';
    var t = document.createElement('div');
    t.className = 'toast ' + type;
    t.innerHTML = (type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️') + ' ' + msg;
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add('show'); }, 50);
    setTimeout(function () {
      t.classList.remove('show');
      setTimeout(function () { t.remove(); }, 400);
    }, 3500);
  };

  /* ─── LocalStorage helpers (global) ─── */
  window.PC = window.PC || {};

  PC.getInquiries = function () {
    try { return JSON.parse(localStorage.getItem('pc_inquiries') || '[]'); } catch (e) { return []; }
  };
  PC.saveInquiries = function (arr) {
    localStorage.setItem('pc_inquiries', JSON.stringify(arr));
  };
  PC.generateId = function () {
    return 'PC' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2, 5).toUpperCase();
  };
  PC.formatDate = function (iso) {
    var d = new Date(iso);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  };
  PC.formatDateTime = function (iso) {
    var d = new Date(iso);
    return d.toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

}());

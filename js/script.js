// NALG Agribusiness Centre — site scripts

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var pill = document.querySelector('.nav-pill');
  if (toggle && pill) {
    toggle.addEventListener('click', function () {
      pill.classList.toggle('open');
    });
    pill.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { pill.classList.remove('open'); });
    });
  }

  // Sticky header shrink shadow on scroll
  var header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 12) header.style.boxShadow = '0 12px 30px -18px rgba(0,0,0,.5)';
    else header.style.boxShadow = 'none';
  });

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // Generic Web3Forms handler (works for any form with data-web3form)
  document.querySelectorAll('form[data-web3form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = form.parentElement.querySelector('.form-success');
      var error = form.parentElement.querySelector('.form-error');
      if (success) success.style.display = 'none';
      if (error) error.style.display = 'none';

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = 'Sending…'; }

      var formData = new FormData(form);
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            form.reset();
            if (success) success.style.display = 'block';
          } else {
            if (error) error.style.display = 'block';
          }
        })
        .catch(function () {
          if (error) error.style.display = 'block';
        })
        .finally(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = originalText; }
        });
    });
  });

  // Footer newsletter -> reuse web3forms too if configured
  var newsletter = document.querySelector('.footer-newsletter form');
  if (newsletter) {
    newsletter.addEventListener('submit', function (e) {
      e.preventDefault();
      newsletter.querySelector('input').value = '';
      var note = newsletter.parentElement.querySelector('.nl-note');
      if (note) { note.textContent = 'Thanks — we\'ll be in touch!'; }
    });
  }
});

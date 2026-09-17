/* Impart Planning — progressive enhancement only. The page works without it. */
(function () {
  'use strict';

  /* Mobile navigation ---------------------------------------------------- */
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Mark the section currently in view ----------------------------------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  var sections = links
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          var active = link.getAttribute('href') === '#' + entry.target.id;
          if (active) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* Newsletter sign-up ---------------------------------------------------
     With a data-endpoint set, the address is POSTed to that service.
     Without one, the form opens a pre-filled email instead of pretending
     to have subscribed anyone.                                            */
  var form = document.getElementById('subscribe-form');
  var status = document.getElementById('subscribe-status');

  if (form && status) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var field = form.querySelector('input[name="email"]');
      var address = field ? field.value.trim() : '';

      var setStatus = function (message, state) {
        status.textContent = message;
        if (state) {
          status.setAttribute('data-state', state);
        } else {
          status.removeAttribute('data-state');
        }
      };

      if (!address || address.indexOf('@') < 1 || address.indexOf('.', address.indexOf('@')) < 0) {
        setStatus('Please enter a valid email address.', 'error');
        if (field) field.focus();
        return;
      }

      var endpoint = form.getAttribute('data-endpoint');

      if (!endpoint) {
        setStatus('Opening your email client — send the message to finish signing up.');
        window.location.href =
          'mailto:support@impartplanning.com' +
          '?subject=' + encodeURIComponent('Newsletter sign-up') +
          '&body=' + encodeURIComponent('Please add ' + address + ' to the newsletter list.');
        return;
      }

      setStatus('Signing you up…');

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: address })
      })
        .then(function (response) {
          if (!response.ok) throw new Error('Request failed: ' + response.status);
          form.reset();
          setStatus('Thank you. You are on the list.');
        })
        .catch(function () {
          setStatus('That did not go through. Please email support@impartplanning.com instead.', 'error');
        });
    });
  }
})();

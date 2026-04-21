(function () {
  function initThemeToggle() {
    var body = document.body;
    var btn = document.getElementById('darkModeBtn');

    if (!btn) {
      return;
    }

    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      btn.innerText = '☀️ 切换模式';
    }

    btn.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      var isDark = body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      btn.innerText = isDark ? '☀️ 切换模式' : '🌙 切换模式';
    });
  }

  function initPublicationToggle() {
    var headers = document.querySelectorAll('.publication-header');

    headers.forEach(function (header) {
      header.addEventListener('click', function () {
        var wrapper = header.closest('.publication-item');
        var isOpen = wrapper.classList.toggle('is-open');
        header.setAttribute('aria-expanded', String(isOpen));
      });
    });
  }

  function initGoogleTranslate() {
    window.googleTranslateElementInit = function () {
      if (!window.google || !google.translate) {
        return;
      }

      new google.translate.TranslateElement(
        {
          pageLanguage: 'zh-CN',
          includedLanguages: 'zh-CN,zh-TW,en,fr,es,ja,ko,de',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    var script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }

  document.addEventListener('DOMContentLoaded', function () {
    initThemeToggle();
    initPublicationToggle();
    initGoogleTranslate();
  });
})();

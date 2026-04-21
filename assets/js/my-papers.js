(function () {
  function getGsDataUrl() {
    var cfg = window.scholarConfig || {};
    var useCdn = !!cfg.useCdn;
    var repository = cfg.repository || '';
    var base = useCdn
      ? 'https://cdn.jsdelivr.net/gh/' + repository + '@'
      : 'https://raw.githubusercontent.com/' + repository + '/';

    return base + 'google-scholar-stats/gs_data.json';
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderPapers(papers) {
    var list = document.getElementById('papers-list');
    if (!list) return;

    list.innerHTML = papers
      .map(function (paper, i) {
        var title = escapeHtml(paper.title);
        var authors = escapeHtml(paper.authors || '未提供作者信息');
        var year = escapeHtml(paper.year || '—');
        var venue = escapeHtml(paper.venue || '—');
        var abstract = escapeHtml(paper.abstract || '暂无简介（可在 Google Scholar 或 _data/publications.yml 中补充）。');
        var citations = paper.citations != null ? paper.citations : '—';

        return (
          '<article class="paper-item">' +
          '<button type="button" class="paper-header" aria-expanded="false">' +
          '<span class="paper-index">#' + (i + 1) + '</span>' +
          '<span class="paper-title">' + title + '</span>' +
          '<span class="paper-toggle">▼</span>' +
          '</button>' +
          '<div class="paper-meta"><strong>作者：</strong>' + authors + '</div>' +
          '<div class="paper-meta"><strong>期刊/会议：</strong>' + venue + ' · <strong>年份：</strong>' + year + ' · <strong>引用：</strong>' + citations + '</div>' +
          '<div class="paper-abstract"><strong>简介：</strong>' + abstract + '</div>' +
          '</article>'
        );
      })
      .join('');

    list.querySelectorAll('.paper-header').forEach(function (header) {
      header.addEventListener('click', function () {
        var item = header.closest('.paper-item');
        var isOpen = item.classList.toggle('is-open');
        header.setAttribute('aria-expanded', String(isOpen));
      });
    });
  }

  function normalizeFromScholar(data) {
    var publications = data && data.publications ? Object.values(data.publications) : [];

    return publications
      .map(function (entry) {
        var bib = entry.bib || {};
        return {
          title: bib.title,
          authors: bib.author,
          year: bib.pub_year,
          venue: bib.venue || bib.journal,
          abstract: bib.abstract,
          citations: entry.num_citations,
        };
      })
      .filter(function (p) {
        return p.title;
      });
  }

  function normalizeFromLocal() {
    return (window.localPublicationsData || []).map(function (p) {
      return {
        title: p.title,
        authors: p.authors,
        year: p.year,
        venue: p.venue,
        abstract: p.abstract,
      };
    });
  }

  function setStatus(text, kind) {
    var status = document.getElementById('papers-status');
    if (!status) return;
    status.className = kind || 'notice--info';
    status.textContent = text;
  }

  document.addEventListener('DOMContentLoaded', function () {
    fetch(getGsDataUrl())
      .then(function (res) {
        if (!res.ok) throw new Error('gs_data.json not available');
        return res.json();
      })
      .then(function (data) {
        var papers = normalizeFromScholar(data);
        if (!papers.length) throw new Error('No papers in gs_data.json');
        renderPapers(papers);
        setStatus('已从 Google Scholar 自动同步数据加载，共 ' + papers.length + ' 篇。', 'notice--success');
      })
      .catch(function () {
        var local = normalizeFromLocal();
        renderPapers(local);
        setStatus('Google Scholar 数据暂不可用，已回退到本地数据。', 'notice--warning');
      });
  });
})();

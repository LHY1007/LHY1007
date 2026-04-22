---
layout: default
permalink: /my-papers/
title: "我的论文"
excerpt: "Google Scholar 全量论文列表"
author_profile: true
---

> 下方默认优先读取 Google Scholar 自动同步数据（`google-scholar-stats/gs_data.json`）。如暂时不可用，将回退到仓库内手动维护的数据。

<div id="papers-status" class="notice--info">正在加载论文列表...</div>

<div id="papers-list" class="papers-list"></div>

<script>
  window.scholarConfig = {
    repository: '{{ site.repository }}',
    useCdn: {{ site.google_scholar_stats_use_cdn | jsonify }}
  };
  window.localPublicationsData = {{ site.data.publications | jsonify }};
</script>
<script src="/assets/js/my-papers.js" defer></script>

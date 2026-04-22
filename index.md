---
layout: default
title: ""
excerpt: ""
author_profile: true
---

{% include page_enhancements.html %}

<span class="anchor" id="about-me"></span>

## 👋 关于我

<p class="intro-text">
  {{ site.data.profile.about.intro }}
</p>

我的研究兴趣包括：
{% for interest in site.data.profile.interests %}
* {{ interest }}
{% endfor %}

---

<span class="anchor" id="education"></span>
## 🎓 学历

{% for edu in site.data.profile.education %}
<div class="education-row">
  <div class="edu-text">
    <strong>{{ edu.period }}</strong><br>
    {{ edu.school }}<br>
    <span class="edu-location">{{ edu.location }}</span>
  </div>
  <img class="edu-logo" src="{{ edu.logo }}" alt="{{ edu.logo_alt }}">
</div>
{% endfor %}

---

<span class="anchor" id="publications"></span>
## 📝 学术成果

为了避免主页过长，论文列表已迁移到独立页面：

- 👉 [查看完整论文列表（按 Google Scholar 同步）](/my-papers/)

你也可以在下方查看最近代表作（从本地数据读取）：

{% assign published = site.data.publications | where: "type", "published" %}
{% for paper in published limit: 3 %}
<div class="publication-item is-open">
  <div class="publication-header" aria-expanded="true">
    <div>
      <p class="publication-citation">
        {{ paper.authors }} ({{ paper.year }}).
        <strong>{{ paper.title }}</strong>.
        <em>{{ paper.venue }}</em>.
      </p>
    </div>
  </div>
  <div class="publication-detail">
    <p>{{ paper.abstract }}</p>
  </div>
</div>
{% endfor %}

---

<span class="anchor" id="projects"></span>
## 💻 科研项目

<div class="projects-grid">
  {% for project in site.data.profile.projects %}
  <div class="project-card">
    <div class="project-title">{{ project.title }}</div>
    <div class="project-meta"><i class="far fa-clock"></i> {{ project.period }}</div>
    <div class="project-meta"><i class="fas fa-map-marker-alt"></i> {{ project.location }}</div>
    <div class="project-role">{{ project.role }}</div>
  </div>
  {% endfor %}
</div>

---

<span class="anchor" id="awards"></span>
## 🏅 荣誉奖项

| 时间 | 奖项名称 | 等级/备注 |
|:---:|:---|:---|
{% for award in site.data.profile.awards %}
| {{ award.time }} | {{ award.name }} | **{{ award.level }}** |
{% endfor %}

---

<span class="anchor" id="conferences"></span>
## 🗣️ 学术会议

| 时间 | 会议 | 角色 |
|:---:|:---|:---|
{% for conf in site.data.profile.conferences %}
| {{ conf.date }} | {{ conf.title }} | {{ conf.role }} |
{% endfor %}

---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% include page_enhancements.html %}

<span class='anchor' id='about-me'></span>

<h3>👋 关于我</h3>
<p style="text-align: justify;">
  我是 <strong>东北大学（中国）</strong> 与 <strong>邓迪大学（英国）</strong> 的中英联合培养本科生，当前正在苏格兰邓迪进行本科第四年的学习。
</p>

我的研究兴趣包括：
* 🤖 人工智能（AI）
* 🧬 智能影像组学（Intelligent Radiomics）
* 🧠 神经科学（Neuroscience）
* 🏃‍♂️ 活动识别（Activity Recognition）
* 💓 医学生理信号分析（Biomedical Signal Processing）

---

<span class='anchor' id='-xl'></span>
<h3>🎓 学历</h3>

<div class="education-row">
  <div class="edu-text">
    <strong>2021.09 - 2025.06</strong><br>
    东北大学 医学与生物信息工程学院<br>
    <span style="color: #666; font-size: 0.9em;">辽宁沈阳 · 本科</span>
  </div>
  <img class="edu-logo" src="/images/NEU_logo.png" alt="NEU Logo">
</div>

<div class="education-row">
  <div class="edu-text">
    <strong>2021.09 - 2025.06</strong><br>
    邓迪大学 科学与工程学院<br>
    <span style="color: #666; font-size: 0.9em;">苏格兰邓迪 · 荣誉本科</span>
  </div>
  <img class="edu-logo" src="/images/UoD_logo.svg" alt="UoD Logo">
</div>

---

<span class='anchor' id='-xscg'></span>
# 📝 学术成果

<div class="publications-container">
    <h3 style="font-size: 1.1rem; font-weight: bold; margin-bottom: 1rem; border-left: 4px solid #007BFF; padding-left: 10px;">已发表论文</h3>

    {% for paper in site.data.publications %}
      {% if paper.type == "published" %}
      <div class="publication-item">
        <div class="publication-header" onclick="toggleDetail(this)">
          <div>
            <p class="publication-citation">
                {{ paper.authors }} ({{ paper.year }}). 
                <strong>{{ paper.title }}</strong>. 
                <em>{{ paper.venue }}</em>.
            </p>
            <div class="publication-links">
              {% for link in paper.links %}
              <a href="{{ link.url }}" {% if link.name == '下载' %}download{% endif %}>
                  <i class="{{ link.icon }}"></i> {{ link.name }}
              </a>
              {% endfor %}
            </div>
          </div>
          <div class="publication-toggle">▼</div>
        </div>
        <div class="publication-detail">
          <h4>论文简介</h4>
          <p>{{ paper.abstract }}</p>
        </div>
      </div>
      {% endif %}
    {% endfor %}

    <h3 style="margin-top: 30px; font-size: 1.1rem; font-weight: bold; margin-bottom: 1rem; border-left: 4px solid #ffc107; padding-left: 10px;">在投论文</h3>
    <ul>
    {% for paper in site.data.publications %}
      {% if paper.type == "under_review" %}
        <li>
            {{ paper.authors }} ({{ paper.year }}). 
            <strong>{{ paper.title }}</strong>. 
            <em>{{ paper.venue }}</em> (Under Review).
            {% if paper.links %}
                <br>
                {% for link in paper.links %}
                 <a href="{{ link.url }}">[ {{ link.name }} ]</a> 
                {% endfor %}
            {% endif %}
        </li>
      {% endif %}
    {% endfor %}
    </ul>
</div>
---

<span class='anchor' id='-kyxm'></span>
<h3>💻 科研项目</h3>
<div class="projects-grid">
  {% for project in site.data.projects %}
  <div class="project-card">
    <div class="project-title">{{ project.title }}</div>
    <div class="project-meta"><i class="far fa-clock"></i> {{ project.period }}</div>
    <div class="project-meta"><i class="fas fa-map-marker-alt"></i> {{ project.location }}</div>
    <div class="project-role">{{ project.role }}</div>
  </div>
  {% endfor %}
</div>
---

<span class='anchor' id='-ryjx'></span>
<h3>🏅 荣誉奖项</h3> 

| 时间 | 奖项名称 | 等级/备注 |
|:---:|:---|:---|
| 2024.8 | 中国大学生计算机博弈大赛 | **一等奖** |
| 2024.4 | 国家大学生创新设计训练计划 | **专业第一 (国家级优秀结题)** |
| 2023.8 | 中国大学生生物医学工程创新设计大赛 | **一等奖 (第一名)** |
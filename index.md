---
layout: default
title: ""
excerpt: ""
author_profile: true
---

<div align="center">
<img style="border-radius: 50%;" src="{{ site.baseurl }}/images/Me.jpg" width="180" height="180">

## {{ site.author.name }}

{{ site.author.bio }}

{{ site.author.location }}

📧 [{{ site.author.email }}](mailto:{{ site.author.email }}) &nbsp;|&nbsp;
<a href="{{ site.author.googlescholar }}">Google Scholar</a> &nbsp;|&nbsp;
<a href="{{ site.author.orcid }}">ORCID</a>

---

🔬 **Research Interests**

{% for interest in site.data.profile.interests %}
* {{ interest }}
{% endfor %}

---

📄 **[About Me]({{ site.baseurl }}{% link about.md %})** &nbsp;&nbsp;|&nbsp;&nbsp; 📝 **[My Papers]({{ site.baseurl }}/my-papers/)**

</div>

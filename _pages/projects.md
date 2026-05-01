---
layout: page
title: projects
permalink: /projects/
description:
nav: true
nav_order: 2
display_categories: []
horizontal: false
---

<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
{% for project in sorted_projects %}
  {% include projects.liquid %}
{% endfor %}
</div>

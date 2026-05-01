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
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% include projects.liquid projects=sorted_projects %}
  {% endfor %}
{% else %}
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% include projects.liquid projects=sorted_projects %}
{% endif %}
</div>

---
layout: page
title: Projects
permalink: /projects/
---

<div class="not-prose grid gap-5 sm:grid-cols-2">
{% assign sorted_projects = site.projects | sort: "importance" %}
{% for project in sorted_projects %}
<a href="{{ project.url | relative_url }}"
   class="group flex flex-col p-6 border border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition-all duration-200">
  <h2 class="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
    {{ project.title }}
  </h2>
  {% if project.description %}
  <p class="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{{ project.description }}</p>
  {% endif %}
  <div class="mt-4 flex items-center justify-between">
    <span class="text-xs text-slate-400">View project →</span>
    {% if project.github %}
    <span class="text-xs font-medium text-indigo-600">GitHub ↗</span>
    {% endif %}
  </div>
</a>
{% endfor %}
</div>

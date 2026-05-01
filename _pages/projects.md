---
layout: page
title: Projects
permalink: /projects/
---

<div class="not-prose grid gap-5 sm:grid-cols-2">
{% assign sorted_projects = site.projects | sort: "importance" %}
{% for project in sorted_projects %}
<a href="{{ project.url | relative_url }}"
   class="group flex flex-col p-6 border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] hover:shadow-sm transition-all duration-200">
  <h2 class="text-base font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
    {{ project.title }}
  </h2>
  {% if project.description %}
  <p class="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">{{ project.description }}</p>
  {% endif %}
  <div class="mt-4 flex items-center justify-between">
    <span class="text-xs text-[var(--color-text-muted)]">View project →</span>
    {% if project.github %}
    <span class="text-xs font-medium text-[var(--color-primary)]">GitHub ↗</span>
    {% endif %}
  </div>
</a>
{% endfor %}
</div>

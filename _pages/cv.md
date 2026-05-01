---
layout: page
title: CV
permalink: /cv/
---

<div class="not-prose mb-8 flex items-center gap-4">
  <a href="{{ '/assets/pdf/resume.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"
     class="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-text)] text-[var(--color-bg)] text-sm font-medium rounded-lg hover:bg-[var(--color-text-muted)] transition-colors">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
    </svg>
    Download PDF
  </a>
</div>

<div class="not-prose mb-12 rounded-xl overflow-hidden border border-[var(--color-border)]" style="height:780px">
  <iframe src="{{ '/assets/pdf/resume.pdf' | relative_url }}"
          class="w-full h-full"
          title="Aarav Saran Gambhir — Resume">
    <p class="p-4 text-sm text-[var(--color-text-muted)]">
      PDF preview unavailable. <a href="{{ '/assets/pdf/resume.pdf' | relative_url }}" class="text-[var(--color-primary)] underline">Download directly.</a>
    </p>
  </iframe>
</div>

<div class="not-prose space-y-14">
{% for section in site.data.cv.cv %}
{% unless section.type == "list" %}
<section>
  <h2 class="text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase mb-6">{{ section.title }}</h2>

  {% if section.type == "time_table" %}
  <div class="space-y-8">
    {% for entry in section.contents %}
    <div class="flex items-start justify-between gap-6">
      <div class="flex-1">
        <h3 class="font-semibold text-[var(--color-text)]">{{ entry.title }}</h3>
        <p class="text-sm text-[var(--color-text-muted)] mt-0.5">{{ entry.institution }}</p>
        {% if entry.description %}
        <ul class="mt-3 space-y-2">
          {% for item in entry.description %}
          <li class="flex gap-2.5 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
            <span>{{ item }}</span>
          </li>
          {% endfor %}
        </ul>
        {% endif %}
      </div>
      <span class="shrink-0 text-sm text-[var(--color-text-muted)] tabular-nums">{{ entry.year }}</span>
    </div>
    {% endfor %}
  </div>

  {% elsif section.type == "nested_list" %}
  <div class="grid sm:grid-cols-2 gap-8">
    {% for group in section.contents %}
    <div>
      <h3 class="text-sm font-medium text-[var(--color-text)] mb-3">{{ group.title }}</h3>
      <div class="flex flex-wrap gap-1.5">
        {% for item in group.items %}
          {% assign techs = item | split: ", " %}
          {% for tech in techs %}
          <span class="px-2.5 py-1 text-xs bg-[var(--color-border)] text-[var(--color-text-muted)] rounded-full">{{ tech }}</span>
          {% endfor %}
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}

</section>
{% endunless %}
{% endfor %}
</div>

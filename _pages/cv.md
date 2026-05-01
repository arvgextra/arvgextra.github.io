---
layout: page
title: CV
permalink: /cv/
---

<div class="not-prose space-y-14">
{% for section in site.data.cv.cv %}
<section>
  <h2 class="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">{{ section.title }}</h2>

  {% if section.type == "time_table" %}
  <div class="space-y-8">
    {% for entry in section.contents %}
    <div class="flex items-start justify-between gap-6">
      <div class="flex-1">
        <h3 class="font-semibold text-slate-900">{{ entry.title }}</h3>
        <p class="text-sm text-slate-500 mt-0.5">{{ entry.institution }}</p>
        {% if entry.description %}
        <ul class="mt-3 space-y-2">
          {% for item in entry.description %}
          <li class="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
            <span class="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            <span>{{ item }}</span>
          </li>
          {% endfor %}
        </ul>
        {% endif %}
      </div>
      <span class="shrink-0 text-sm text-slate-400 tabular-nums">{{ entry.year }}</span>
    </div>
    {% endfor %}
  </div>

  {% elsif section.type == "nested_list" %}
  <div class="grid sm:grid-cols-2 gap-8">
    {% for group in section.contents %}
    <div>
      <h3 class="text-sm font-medium text-slate-700 mb-3">{{ group.title }}</h3>
      <div class="flex flex-wrap gap-1.5">
        {% for item in group.items %}
          {% assign techs = item | split: ", " %}
          {% for tech in techs %}
          <span class="px-2.5 py-1 text-xs bg-slate-100 text-slate-600 rounded-full">{{ tech }}</span>
          {% endfor %}
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}

</section>
{% endfor %}
</div>

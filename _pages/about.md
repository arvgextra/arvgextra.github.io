---
layout: home
title: Aarav Saran Gambhir
permalink: /
---

<!-- ─── HERO ─────────────────────────────────────────────── -->
<section class="pt-20 pb-24">
<div class="flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-16">
<div class="flex-1 text-center sm:text-left">
  <p class="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase mb-4">Data Scientist & AI Engineer</p>
  <h1 class="text-5xl sm:text-6xl font-bold tracking-tight text-[var(--color-text)] leading-[1.1]">
    Aarav Saran<br>Gambhir
  </h1>
  <p class="mt-5 text-lg text-[var(--color-text-muted)] leading-relaxed max-w-lg">
    Building LLM-powered extraction systems, evaluation frameworks, and intelligent document pipelines.
    Northeastern University — BS Data Science, graduating May 2026.
  </p>
  <div class="mt-8 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
    <a href="#projects"
       class="px-5 py-2.5 bg-[var(--color-primary)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">
      View Projects
    </a>
    <a href="{{ '/assets/pdf/resume.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"
       class="px-5 py-2.5 bg-[var(--color-border)] text-[var(--color-text)] text-sm font-medium rounded-lg hover:opacity-80 transition-opacity">
      View Resume ↗
    </a>
    <a href="#contact"
       class="px-5 py-2.5 text-[var(--color-text-muted)] text-sm font-medium hover:text-[var(--color-primary)] transition-colors">
      Get in touch →
    </a>
  </div>
</div>
<div class="shrink-0">
  <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Aarav Saran Gambhir"
       class="w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover ring-4 ring-[var(--color-border)] shadow-lg">
</div>
</div>
</section>

<!-- ─── ABOUT ────────────────────────────────────────────── -->
<section id="about" class="py-24 border-t border-[var(--color-border)]">
<p class="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase mb-3">About</p>
<h2 class="text-2xl font-bold text-[var(--color-text)] mb-8">Who I am</h2>
<div class="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
  <p>
    A recent graduate from Northeastern University, where I completed my B.S. in Data Science with a Minor in Economics,
    I'm really interested in applied AI and ML roles — especially where I can work on LLM systems and real-world data
    problems that aren't clean or well-defined: things like LLM-driven workflows, data pipelines, and evaluation
    frameworks. I enjoy figuring out how models behave in the real world and making them more reliable.
  </p>
  <p>
    Outside of school and work, I love traveling, food, and sports — you'll often hear me talk about the number of
    countries I've visited (43 and counting) and teams I follow obsessively (Manchester United, Boston Celtics).
  </p>
</div>
</section>

<!-- ─── EXPERIENCE ───────────────────────────────────────── -->
<section id="experience" class="py-24 border-t border-[var(--color-border)]">
<p class="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase mb-3">Experience</p>
<h2 class="text-2xl font-bold text-[var(--color-text)] mb-10">Where I've worked</h2>
{% assign exp_section = site.data.cv.cv | where: "title", "Experience" | first %}
<div class="space-y-10">
  {% for entry in exp_section.contents %}
  <div class="flex gap-5">
    <div class="shrink-0 mt-0.5">
      {% if entry.institution_logo %}
        {% assign white_logos = "harbourvest_logo.png,boat_logo.png,neu_logo.png,nike.png" | split: "," %}
        {% if white_logos contains entry.institution_logo %}
        <div class="w-11 h-11 rounded-lg bg-white border border-[var(--color-border)] p-1">
          <img src="{{ '/assets/img/' | append: entry.institution_logo | relative_url }}"
               alt="{{ entry.institution }}"
               class="w-full h-full object-contain">
        </div>
        {% else %}
        <img src="{{ '/assets/img/' | append: entry.institution_logo | relative_url }}"
             alt="{{ entry.institution }}"
             class="w-11 h-11 rounded-lg object-contain bg-[var(--color-border)] border border-[var(--color-border)] p-1.5">
        {% endif %}
      {% else %}
      <div class="w-11 h-11 rounded-lg bg-[var(--color-border)] border border-[var(--color-border)]"></div>
      {% endif %}
    </div>
    <div class="flex-1">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="font-semibold text-[var(--color-text)]">{{ entry.title }}</h3>
          <p class="text-sm text-[var(--color-text-muted)] mt-0.5">{{ entry.institution }}</p>
        </div>
        <span class="shrink-0 text-sm text-[var(--color-text-muted)] tabular-nums whitespace-nowrap">{{ entry.year }}</span>
      </div>
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
  </div>
  {% endfor %}
</div>
</section>

<!-- ─── SKILLS ───────────────────────────────────────────── -->
<section id="skills" class="py-24 border-t border-[var(--color-border)]">
<p class="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase mb-3">Skills</p>
<h2 class="text-2xl font-bold text-[var(--color-text)] mb-10">What I work with</h2>
{% assign skills_section = site.data.cv.cv | where: "title", "Skills" | first %}
<div class="grid sm:grid-cols-2 gap-8">
  {% for group in skills_section.contents %}
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
</section>

<!-- ─── PROJECTS ─────────────────────────────────────────── -->
<section id="projects" class="py-24 border-t border-[var(--color-border)]">
<p class="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase mb-3">Projects</p>
<h2 class="text-2xl font-bold text-[var(--color-text)] mb-10">What I've built</h2>
<div class="grid gap-5 sm:grid-cols-2">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% for project in sorted_projects %}
  <a href="{{ project.url | relative_url }}"
     class="group flex flex-col p-6 border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] hover:shadow-sm transition-all duration-200">
    <h3 class="text-base font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
      {{ project.title }}
    </h3>
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
</section>

<!-- ─── INTERESTS ────────────────────────────────────────── -->
<section id="interests" class="py-24 border-t border-[var(--color-border)]">
<p class="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase mb-3">Interests</p>
<h2 class="text-2xl font-bold text-[var(--color-text)] mb-8">Beyond work</h2>
{% assign interests_section = site.data.cv.cv | where: "title", "Interests" | first %}
<ul class="space-y-3">
  {% for interest in interests_section.contents %}
  <li class="flex items-center gap-3 text-[var(--color-text-muted)]">
    <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
    {{ interest }}
  </li>
  {% endfor %}
</ul>
</section>

<!-- ─── INVOLVEMENT ──────────────────────────────────────── -->
<section id="involvement" class="py-24 border-t border-[var(--color-border)]">
<p class="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase mb-3">Involvement & Honors</p>
<h2 class="text-2xl font-bold text-[var(--color-text)] mb-8">At Northeastern</h2>
{% assign involvement_section = site.data.cv.cv | where: "title", "Involvement & Honors" | first %}
<ul class="space-y-3">
  {% for item in involvement_section.contents %}
  <li class="flex items-center gap-3 text-[var(--color-text-muted)]">
    <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
    {{ item }}
  </li>
  {% endfor %}
</ul>
</section>

<!-- ─── CONTACT ──────────────────────────────────────────── -->
<section id="contact" class="py-24 border-t border-[var(--color-border)]">
<p class="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase mb-3">Contact</p>
<h2 class="text-2xl font-bold text-[var(--color-text)] mb-3">Get in touch</h2>
<p class="text-sm text-[var(--color-text-muted)] mb-10">
  Open to full-time roles in AI engineering and data science — graduated May 2026.
</p>
<div class="space-y-4">
  <a href="mailto:{{ site.email }}" class="flex items-center gap-4 group w-fit">
    <div class="w-10 h-10 rounded-lg bg-[var(--color-border)] flex items-center justify-center group-hover:opacity-80 transition-opacity">
      <svg class="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    </div>
    <div>
      <p class="text-xs text-[var(--color-text-muted)] uppercase tracking-wide">Email</p>
      <p class="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">{{ site.email }}</p>
    </div>
  </a>
  <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener noreferrer"
     class="flex items-center gap-4 group w-fit">
    <div class="w-10 h-10 rounded-lg bg-[var(--color-border)] flex items-center justify-center group-hover:opacity-80 transition-opacity">
      <svg class="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    </div>
    <div>
      <p class="text-xs text-[var(--color-text-muted)] uppercase tracking-wide">GitHub</p>
      <p class="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">github.com/{{ site.github_username }}</p>
    </div>
  </a>
  <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" rel="noopener noreferrer"
     class="flex items-center gap-4 group w-fit">
    <div class="w-10 h-10 rounded-lg bg-[var(--color-border)] flex items-center justify-center group-hover:opacity-80 transition-opacity">
      <svg class="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </div>
    <div>
      <p class="text-xs text-[var(--color-text-muted)] uppercase tracking-wide">LinkedIn</p>
      <p class="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">linkedin.com/in/{{ site.linkedin_username }}</p>
    </div>
  </a>
</div>
</section>

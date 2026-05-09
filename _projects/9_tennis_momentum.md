---
layout: project
title: Tennis Match Momentum Analyzer
description: Statistical analysis of 2M+ ATP match points to test whether momentum in tennis is real or a narrative imposed on independent events.
importance: 1
github: https://github.com/arvgextra/tennis_momentum
---

Does momentum exist in professional tennis, or is it a story we tell about random sequences? Analyzed ~2 million points across 13,050 ATP main draw matches (2011–2015) using Markov chains, hidden Markov models, autoregressive logistic regression, and PELT change-point detection.

**Finding:** momentum is structural, not psychological. Points are statistically dependent (Chi²=726, p≈0), but the dependence is explained entirely by game format — serve alternation — not psychological carry-over. At deuce, consecutive points are perfectly independent. An autoregressive model with 5 lag features performs worse than always predicting "server wins." A 2-state HMM assigned 100% of points to the low state on Viterbi decoding — the high-momentum state was a training artifact.

**Stack:** Python · Markov Chains · HMM (hmmlearn) · AR Logistic Regression · PELT (ruptures) · Streamlit · Pandas · Scipy

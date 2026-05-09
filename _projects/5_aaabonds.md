---
layout: page
title: AAA Bond Price Prediction
description: Polynomial regression model predicting AAA-rated corporate bond prices from macroeconomic indicators.
importance: 7
github: https://github.com/arvgextra/AAABonds
---

Analyzed how macroeconomic indicators — GDP, CPI, unemployment rate, and interest rates — relate to AAA-rated corporate bond prices. First fit individual polynomial regressions per indicator to identify the most influential variables, then combined them into a **multiple polynomial regression model** achieving an R² of 0.91.

Ties into the Economics minor — the bond market context (larger than equities by market cap, dominated by institutional investors) motivated the choice to focus on AAA-rated instruments as the lowest-risk, most analytically tractable segment.

**Stack:** Python · Jupyter · Scikit-learn · Polynomial Regression · Macroeconomic data (FRED)

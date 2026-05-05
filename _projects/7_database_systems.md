---
layout: page
title: Database Systems — Redis, MySQL & MongoDB
description: Three database deep-dives comparing performance and modeling approaches across relational, key-value, and document stores.
importance: 8
---

Three standalone database engineering projects exploring different storage paradigms.

**Redis vs MySQL — Twitter-like API** — [twitter\_rdb](https://github.com/arvgextra/twitter_rdb) · [graph-data-models](https://github.com/arvgextra/graph-data-models)

Modeled a Twitter-style social graph (users, tweets, follows, timelines) in both **MySQL** and **Redis**. Benchmarked read/write performance across both and built a Flask API on top of each. Redis significantly outperformed MySQL on timeline fan-out reads via pre-computed sorted sets, while MySQL provided stronger consistency for relational queries.

**EV Dataset — MongoDB + Geospatial Indexing** — [ev\_mongo](https://github.com/arvgextra/ev_mongo)

Imported a GeoJSON electric vehicle dataset into **MongoDB** via Docker, flattened nested GeoJSON features into NDJSON for bulk import, and built a `2dsphere` geospatial index for proximity queries. Explored aggregation pipelines and geospatial query patterns using PyMongo.

**Stack:** Redis · MySQL · MongoDB · Flask · Docker · PyMongo · Python · SQL

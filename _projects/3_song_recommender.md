---
layout: page
title: Graph-Based Song Recommendation System
description: Neo4j graph database and PCA-driven recommender using Spotify audio features and genre encoding.
importance: 5
github: https://github.com/arvgextra/graphdb_song-recommender
---

Built a song recommendation engine using a **Neo4j graph database** where nodes represent songs and edges encode audio similarity. From a sample of 5,000 Spotify tracks, standardized 8 audio features and applied PCA, producing 5 components capturing ~88% of variance across axes like energy, mood, danceability, and instrumentalness.

KNN (15 neighbors) was run on a combined feature matrix of PCA scores and one-hot encoded genre, with cosine similarity as the distance metric. Only edges above a similarity threshold of 0.5 were included in the graph. Genre and audio features were weighted equally (1.0) after testing — pure audio produced genre-agnostic mismatches, while over-weighting genre collapsed results to a single artist.

**Stack:** Neo4j · Cypher · Python · PCA · KNN · Docker · Spotify / Kaggle data

// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-blackjack-strategic-assistant",
          title: 'Blackjack Strategic Assistant',
          description: "Real-time computer vision system for card detection, counting, and play recommendations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_blackjack/";
            },},{id: "projects-agentx-ai-multi-agent-support-platform",
          title: 'agentX — AI Multi-Agent Support Platform',
          description: "Multi-agent customer support system for Fine Dine and QSR operations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_agentx/";
            },},{id: "projects-graph-based-song-recommendation-system",
          title: 'Graph-Based Song Recommendation System',
          description: "Neo4j graph database and PCA-driven recommender using Spotify audio features and genre encoding.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_song_recommender/";
            },},{id: "projects-startupspace",
          title: 'StartupSpace',
          description: "Full-stack platform connecting startups, investors, acquirers, and researchers via a relational database and Flask API.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_startupspace/";
            },},{id: "projects-aaa-bond-price-prediction",
          title: 'AAA Bond Price Prediction',
          description: "Polynomial regression model predicting AAA-rated corporate bond prices from macroeconomic indicators.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_aaabonds/";
            },},{id: "projects-book-recommender",
          title: 'Book Recommender',
          description: "Goodreads-based book recommender using sentiment analysis, KMeans clustering, and centroid similarity scoring.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_bookrecommender/";
            },},{id: "projects-database-systems-redis-mysql-amp-mongodb",
          title: 'Database Systems — Redis, MySQL &amp;amp; MongoDB',
          description: "Three database deep-dives comparing performance and modeling approaches across relational, key-value, and document stores.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_database_systems/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

import type { Book } from './types';

/**
 * Videos, websites, articles, and papers. Same fields as books, plus `type`.
 * For a video, `link` is the YouTube URL (youtu.be or youtube.com both work);
 * the site plays it in place. `author` is the channel, publisher, or writer.
 */
export const links: Book[] = [
  // Videos
  {
    title: "I discovered a sound that leaks your exact location (and it's everywhere)",
    author: "colsto",
    type: "video",
    category: "Technology",
    tags: ["privacy", "security", "osint", "geolocation", "audio forensics"],
    link: "https://youtu.be/UytYrhYLOKI",
  },
  {
    title: "A Gentle Introduction to Machine Learning",
    author: "StatQuest with Josh Starmer",
    type: "video",
    category: "Technology",
    tags: ["machine learning", "statistics", "data science", "statquest"],
    link: "https://youtu.be/Gv9_4yMHFhI",
  },
  {
    title: "Histograms, Clearly Explained",
    author: "StatQuest with Josh Starmer",
    type: "video",
    category: "Mathematics",
    tags: ["mathematics", "statistics", "data visualization", "statquest"],
    link: "https://youtu.be/qBigTkBLU6g",
  },
  {
    title: "Vectors | Chapter 1, Essence of Linear Algebra",
    author: "3Blue1Brown",
    type: "video",
    category: "Mathematics",
    tags: ["mathematics", "linear algebra", "vectors", "3blue1brown"],
    link: "https://youtu.be/fNk_zzaMoSs",
  },

  // Websites
  {
    title: "The Quant Stack",
    author: "Quant Arb",
    type: "website",
    category: "Trading",
    tags: ["finance", "trading", "quantitative finance", "algorithmic trading", "research", "newsletter"],
    link: "https://www.algos.org/",
    description: "Articles about quantitative research and trading.",
  },
  {
    title: "Celsius Energy",
    author: "Celsius Energy",
    type: "website",
    category: "Trading",
    tags: ["finance", "trading", "natural gas", "energy", "commodities", "weather", "data"],
    link: "https://www.celsiusenergy.net/",
    description: "Real-time natural gas data: inventories, weather-driven demand, power burn, and commentary.",
  },
  {
    title: "Commodity Futures Trading Commission (CFTC)",
    author: "U.S. CFTC",
    type: "website",
    category: "Finance",
    tags: ["finance", "futures", "derivatives", "regulation", "commodities", "commitments of traders", "data"],
    link: "https://www.cftc.gov/",
    description: "U.S. derivatives regulator; publishes the weekly Commitments of Traders reports.",
  },
];

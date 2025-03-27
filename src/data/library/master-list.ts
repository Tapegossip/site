
import { LibraryItem } from './types';

/**
 * Master list of all books in the library
 * Each book has a unique ID and can be categorized with multiple tags
 */
export const masterBookList: LibraryItem[] = [
  // Philosophy Books
  {
    id: '1',
    title: "The Beginning of Infinity",
    author: "David Deutsch",
    publishedYear: 2011,
    link: "https://www.goodreads.com/book/show/10483171-the-beginning-of-infinity",
    tags: ["philosophy", "science", "progress", "epistemology", "knowledge"],
    type: "book",
    description: "Explores how human understanding has evolved through an interplay of theories and criticism, leading to an unbounded growth of knowledge."
  },
  {
    id: '6',
    title: "Meditations",
    author: "Marcus Aurelius",
    publishedYear: 180,
    link: "https://www.goodreads.com/book/show/30659.Meditations",
    tags: ["philosophy", "stoicism", "self-improvement", "wisdom", "ancient"],
    type: "book"
  },
  {
    id: '9',
    title: "Inadequate Equilibria",
    author: "Eliezer Yudkowsky",
    publishedYear: 2017,
    link: "https://www.lesswrong.com/s/oLGCcbnvabyibnG9d",
    tags: ["rationality", "economics", "decision making", "institutions"],
    type: "book"
  },
  {
    id: '10',
    title: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    publishedYear: 1962,
    link: "https://www.goodreads.com/book/show/61539.The_Structure_of_Scientific_Revolutions",
    tags: ["philosophy of science", "history of science", "paradigm shifts"],
    type: "book"
  },
  {
    id: '64',
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/30257963-12-rules-for-life",
    tags: ["psychology", "self-help", "philosophy", "ethics", "personal development"],
    type: "book",
    description: "A guide for living a more meaningful life with rules based on ancient traditions, psychology, and stories."
  },
  {
    id: '180',
    title: "Essays in Existentialism",
    author: "Jean-Paul Sartre",
    publishedYear: 1965,
    link: "https://www.goodreads.com/book/show/20518.Essays_in_Existentialism",
    tags: ["philosophy", "existentialism", "essays", "consciousness"],
    type: "book",
    description: "A collection of essays exploring Sartre's existentialist philosophy."
  },
  {
    id: '181',
    title: "Plato and a Platypus Walk into a Bar",
    author: "Thomas Cathcart, Daniel Klein",
    publishedYear: 2007,
    link: "https://www.goodreads.com/book/show/180506.Plato_and_a_Platypus_Walk_into_a_Bar_",
    tags: ["philosophy", "humor", "introduction", "concepts"],
    type: "book",
    description: "Understanding philosophy through jokes."
  },
  {
    id: '182',
    title: "Discourses on Livy",
    author: "Niccolo Machiavelli",
    publishedYear: 1531,
    link: "https://www.goodreads.com/book/show/28588.Discourses_on_Livy",
    tags: ["philosophy", "politics", "history", "governance"],
    type: "book",
    description: "Machiavelli's analysis of Roman history and its lessons for republican governance."
  },
  
  // Finance Books
  {
    id: '37',
    title: "The ANXIOUS Investor",
    author: "Scott Nations",
    publishedYear: 2022,
    link: "https://www.goodreads.com/book/show/60316167-the-anxious-investor",
    tags: ["finance", "investing", "psychology", "behavioral finance", "market psychology"],
    type: "book",
    description: "How to harness your anxiety for better investing decisions."
  },
  {
    id: '38',
    title: "The End of Accounting",
    author: "Baruch Lev, Feng Gu",
    publishedYear: 2016,
    link: "https://www.goodreads.com/book/show/29939557-the-end-of-accounting-and-the-path-forward-for-investors-and-managers",
    tags: ["finance", "accounting", "investing", "financial analysis", "corporate reporting"],
    type: "book",
    description: "Argues that traditional financial statements have lost their relevance for investors and managers."
  },
  {
    id: '52',
    title: "Heard on The Street",
    author: "Timothy Falcon Crack",
    publishedYear: 2014,
    link: "https://www.goodreads.com/book/show/22306706-heard-on-the-street",
    tags: ["finance", "quantitative", "interviews", "wall street", "investment banking"],
    type: "book",
    description: "Quantitative questions from Wall Street job interviews with detailed solutions."
  },
  {
    id: '191',
    title: "Fooling Some of the People All Of The Time",
    author: "David Einhorn",
    publishedYear: 2011,
    link: "https://www.goodreads.com/book/show/7663760-fooling-some-of-the-people-all-of-the-time",
    tags: ["finance", "investing", "short selling", "hedge funds", "memoir"],
    type: "book",
    description: "A long short story about Allied Capital and the financial system."
  },
  
  // Science Books
  {
    id: '35',
    title: "The Evolution of Biological Information",
    author: "Christoph Adami",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/145491111-the-evolution-of-biological-information",
    tags: ["biology", "evolution", "information theory", "complexity", "science"],
    type: "book",
    description: "An exploration of how information evolves in biological systems."
  },
  
  // Technology Books
  {
    id: '8',
    title: "Status as a Service (StaaS)",
    author: "Eugene Wei",
    publishedYear: 2019,
    link: "https://www.eugenewei.com/blog/2019/2/19/status-as-a-service",
    tags: ["social media", "network effects", "status", "technology", "society"],
    type: "article"
  },
  {
    id: '26',
    title: "AI Superpowers",
    author: "Kai-Fu Lee",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/38242135-ai-superpowers",
    tags: ["technology", "artificial intelligence", "china", "silicon valley", "future"],
    type: "book",
    description: "A perspective on the future of AI and the technological competition between China and the United States."
  },
  {
    id: '27',
    title: "AI 2041",
    author: "Kai-Fu Lee",
    publishedYear: 2021,
    link: "https://www.goodreads.com/book/show/55968563-ai-2041",
    tags: ["technology", "artificial intelligence", "future", "science fiction"],
    type: "book",
    description: "Ten stories set in 2041 exploring how AI might transform our world over the next 20 years."
  },
  {
    id: '28',
    title: "Artificial Intelligence: A Guide for Thinking Humans",
    author: "Melanie Mitchell",
    publishedYear: 2019,
    link: "https://www.goodreads.com/book/show/43565311-artificial-intelligence",
    tags: ["technology", "artificial intelligence", "computer science", "machine learning"],
    type: "book",
    description: "A balanced and accessible overview of AI technologies and their implications."
  },
  {
    id: '45',
    title: "The Lean Startup",
    author: "Eric Ries",
    publishedYear: 2011,
    link: "https://www.goodreads.com/book/show/10127019-the-lean-startup",
    tags: ["startups", "business", "entrepreneurship", "innovation", "product development"],
    type: "book",
    description: "A methodology for developing businesses and products through validated learning and rapid experimentation."
  },
  
  // Business Books
  {
    id: '29',
    title: "The Singapore Story",
    author: "Lee Kuan Yew (LKY)",
    publishedYear: 1998,
    link: "https://www.goodreads.com/book/show/189599.The_Singapore_Story",
    tags: ["history", "biography", "politics", "singapore", "memoir"],
    type: "book",
    description: "The first volume of Lee Kuan Yew's memoirs, covering Singapore's path to independence."
  },
  {
    id: '30',
    title: "From Third World to First: The Singapore Story: 1965-2000",
    author: "Lee Kuan Yew (LKY)",
    publishedYear: 2000,
    link: "https://www.goodreads.com/book/show/144409.From_Third_World_to_First",
    tags: ["history", "biography", "politics", "singapore", "economics", "development"],
    type: "book",
    description: "Lee Kuan Yew's account of how Singapore developed from a third world country into a modern economic powerhouse."
  },
  {
    id: '47',
    title: "COVID-19: The Great Reset",
    author: "Klaus Schwab, Thierry Malleret",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/54498122-covid-19",
    tags: ["economics", "politics", "society", "pandemic", "future", "business"],
    type: "book",
    description: "Examines the far-reaching implications of the COVID-19 pandemic on society, economics, and global politics."
  },
  {
    id: '48',
    title: "The Goal: A Process of Ongoing Improvement",
    author: "Eliyahu M. Goldratt, Jeff Cox",
    publishedYear: 1984,
    link: "https://www.goodreads.com/book/show/113934.The_Goal",
    tags: ["business", "management", "productivity", "manufacturing", "operations"],
    type: "book",
    description: "A business novel that introduces the Theory of Constraints for improving process efficiency."
  },
  {
    id: '50',
    title: "Hidden Champions",
    author: "Hermann Simon",
    publishedYear: 2009,
    link: "https://www.goodreads.com/book/show/15843089-hidden-champions-of-the-twenty-first-century",
    tags: ["business", "strategy", "management", "global markets", "competitive advantage"],
    type: "book",
    description: "Analysis of little-known world market leaders and their successful strategies."
  },
  {
    id: '58',
    title: "Principles",
    author: "Ray Dalio",
    publishedYear: 2017,
    link: "https://www.goodreads.com/book/show/34536488-principles",
    tags: ["business", "leadership", "decision making", "management"],
    type: "book"
  },
  {
    id: '61',
    title: "Good to Great",
    author: "Jim Collins",
    publishedYear: 2001,
    link: "https://www.goodreads.com/book/show/76865.Good_to_Great",
    tags: ["business", "leadership", "management", "success"],
    type: "book"
  },
  
  // Self-Improvement Books
  {
    id: '21',
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    publishedYear: 2011,
    link: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow",
    tags: ["psychology", "behavioral economics", "decision making", "cognitive biases", "self-improvement"],
    type: "book",
    description: "Nobel Prize winner Daniel Kahneman's groundbreaking work on the two systems that drive the way we think."
  },
  {
    id: '22',
    title: "Noise: A Flaw in Human Judgment",
    author: "Daniel Kahneman, Olivier Sibony, Cass R. Sunstein",
    publishedYear: 2021,
    link: "https://www.goodreads.com/book/show/55339408-noise",
    tags: ["psychology", "decision making", "behavioral economics", "judgment"],
    type: "book",
    description: "An exploration of how noise (random variability) affects our decision-making processes."
  },
  {
    id: '53',
    title: "Thinking in Bets",
    author: "Annie Duke",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/35957157-thinking-in-bets",
    tags: ["decision making", "psychology", "poker", "uncertainty"],
    type: "book",
    description: "Making smarter decisions when you don't have all the facts."
  },
  {
    id: '54',
    title: "Show Your Work",
    author: "Austin Kleon",
    publishedYear: 2014,
    link: "https://www.goodreads.com/book/show/18290401-show-your-work",
    tags: ["creativity", "art", "career", "self-improvement"],
    type: "book"
  },
  {
    id: '55',
    title: "How To Win Friends and Influence People",
    author: "Dale Carnegie",
    publishedYear: 1936,
    link: "https://www.goodreads.com/book/show/4865.How_to_Win_Friends_and_Influence_People",
    tags: ["self-help", "psychology", "communication", "relationships"],
    type: "book"
  },
  {
    id: '56',
    title: "Atomic Habits",
    author: "James Clear",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/40121378-atomic-habits",
    tags: ["self-improvement", "habits", "psychology", "productivity"],
    type: "book"
  },
  {
    id: '57',
    title: "The One Thing",
    author: "Gary Keller",
    publishedYear: 2013,
    link: "https://www.goodreads.com/book/show/16256798-the-one-thing",
    tags: ["productivity", "focus", "business", "self-improvement"],
    type: "book"
  },
  {
    id: '63',
    title: "The Way of the Superior Man",
    author: "David Deida",
    publishedYear: 2004,
    link: "https://www.goodreads.com/book/show/79424.The_Way_of_the_Superior_Man",
    tags: ["masculinity", "spirituality", "relationships", "self-help"],
    type: "book"
  },
  
  // Fiction Books
  {
    id: '46',
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedYear: 1954,
    link: "https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings",
    tags: ["fiction", "fantasy", "classic", "adventure", "epic"],
    type: "book",
    description: "An epic high-fantasy novel that has had a profound influence on the genre."
  },
  
  // Psychology Books
  // (Note: Already included Thinking, Fast and Slow and Noise above in self-improvement)
  {
    id: '120',
    title: "How to Know a Person",
    author: "David Brooks",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/145335868-how-to-know-a-person",
    tags: ["psychology", "relationships", "communication", "empathy"],
    type: "book",
    description: "The art of seeing others deeply and being deeply seen."
  },
  {
    id: '121',
    title: "The Road to Character",
    author: "David Brooks",
    publishedYear: 2015,
    link: "https://www.goodreads.com/book/show/22551809-the-road-to-character",
    tags: ["psychology", "character", "virtue", "personal development"],
    type: "book",
    description: "Explores the path to a deeper and more meaningful life through moral virtues."
  },
  {
    id: '122',
    title: "Awe: The New Science of Everyday Wonder",
    author: "Dacher Keltner",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/60462832-awe",
    tags: ["psychology", "emotion", "wonder", "wellbeing", "science"],
    type: "book",
    description: "How the science of awe can transform your life."
  },
  {
    id: '123',
    title: "How to Change Your Mind",
    author: "Michael Pollan",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/36613747-how-to-change-your-mind",
    tags: ["psychology", "psychedelics", "neuroscience", "consciousness"],
    type: "book",
    description: "What the new science of psychedelics teaches us about consciousness, dying, addiction, depression, and transcendence."
  },
  
  // Physics Books
  {
    id: '36',
    title: "Black Holes & Time Warps",
    author: "Kip Stephen Thorne",
    publishedYear: 1994,
    link: "https://www.goodreads.com/book/show/17362.Black_Holes_Time_Warps",
    tags: ["physics", "cosmology", "black holes", "relativity", "popular science"],
    type: "book",
    description: "An accessible explanation of Einstein's relativity theory and black holes."
  },
  {
    id: '130',
    title: "The Road to Reality",
    author: "Roger Penrose",
    publishedYear: 2004,
    link: "https://www.goodreads.com/book/show/10638.The_Road_to_Reality",
    tags: ["physics", "mathematics", "cosmology", "quantum mechanics"],
    type: "book",
    description: "A complete guide to the laws of the universe."
  },
  {
    id: '131',
    title: "Methods of Theoretical Physics",
    author: "Philip M. Morse, Herman Feshbach",
    publishedYear: 1953,
    link: "https://www.goodreads.com/book/show/205915.Methods_of_Theoretical_Physics",
    tags: ["physics", "mathematics", "theoretical physics", "textbook"],
    type: "book",
    description: "A classic and comprehensive reference on mathematical methods in theoretical physics."
  },
  {
    id: '132',
    title: "Mathematical Methods for Physicists",
    author: "Arfken, Weber, Harris",
    publishedYear: 2012,
    link: "https://www.goodreads.com/book/show/114404.Mathematical_Methods_for_Physicists",
    tags: ["physics", "mathematics", "methods", "textbook"],
    type: "book",
    description: "A comprehensive guide to mathematical methods used in physics."
  },
  {
    id: '133',
    title: "White Holes: Inside the Horizon",
    author: "Carlo Rovelli",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/121808353-white-holes",
    tags: ["physics", "cosmology", "quantum gravity", "black holes"],
    type: "book",
    description: "An exploration of white holes as the theoretical time-reversed version of black holes."
  },
  
  // Astronomy Books
  {
    id: '23',
    title: "Cosmos",
    author: "Carl Sagan",
    publishedYear: 1980,
    link: "https://www.goodreads.com/book/show/55030.Cosmos",
    tags: ["astronomy", "science", "physics", "cosmology", "popular science"],
    type: "book",
    description: "Carl Sagan's classic exploration of the universe and humanity's place within it."
  },
  {
    id: '24',
    title: "Pale Blue Dot: A Vision of Human Future in Space",
    author: "Carl Sagan",
    publishedYear: 1994,
    link: "https://www.goodreads.com/book/show/61663.Pale_Blue_Dot",
    tags: ["astronomy", "science", "space exploration", "cosmology"],
    type: "book",
    description: "Inspired by the famous 'pale blue dot' photograph, Sagan reflects on humanity's place in the cosmos."
  },
  {
    id: '25',
    title: "Contact",
    author: "Carl Sagan",
    publishedYear: 1985,
    link: "https://www.goodreads.com/book/show/61666.Contact",
    tags: ["astronomy", "science fiction", "extraterrestrial life", "SETI"],
    type: "book",
    description: "A novel about human's first contact with an extraterrestrial civilization."
  },
  
  // Geography Books
  {
    id: '140',
    title: "Prisoners of Geography",
    author: "Tim Marshall",
    publishedYear: 2015,
    link: "https://www.goodreads.com/book/show/25135194-prisoners-of-geography",
    tags: ["geography", "geopolitics", "international relations", "politics"],
    type: "book",
    description: "Ten maps that explain everything about the world."
  },
  {
    id: '141',
    title: "The Revenge of Geography",
    author: "Robert D. Kaplan",
    publishedYear: 2012,
    link: "https://www.goodreads.com/book/show/13330422-the-revenge-of-geography",
    tags: ["geography", "geopolitics", "international relations", "politics"],
    type: "book",
    description: "What the map tells us about coming conflicts and the battle against fate."
  },
  {
    id: '142',
    title: "Atlas of the World",
    author: "National Geographic",
    publishedYear: 2019,
    link: "https://www.goodreads.com/book/show/45044959-national-geographic-atlas-of-the-world-eleventh-edition",
    tags: ["geography", "atlas", "maps", "reference"],
    type: "book",
    description: "A comprehensive world atlas with detailed maps and geographical information."
  },
  
  // Politics Books
  {
    id: '150',
    title: "The Grand Chessboard",
    author: "Zbigniew Brzezinski",
    publishedYear: 1997,
    link: "https://www.goodreads.com/book/show/46674.The_Grand_Chessboard",
    tags: ["politics", "geopolitics", "international relations", "strategy"],
    type: "book",
    description: "American primacy and its geostrategic imperatives."
  },
  {
    id: '151',
    title: "Nasty Politics",
    author: "Thomas Zeitzoff",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/151313219-nasty-politics",
    tags: ["politics", "psychology", "communication", "political science"],
    type: "book",
    description: "The logic of insults, threats, and incitement in political discourse."
  },
  {
    id: '152',
    title: "Quest for Status: Chinese and Russian Foreign Policy",
    author: "Alexei Shevchenko, Deborah Welch Larson",
    publishedYear: 2019,
    link: "https://www.goodreads.com/book/show/41432942-quest-for-status",
    tags: ["politics", "international relations", "status", "china", "russia"],
    type: "book",
    description: "An examination of how status concerns drive the foreign policies of China and Russia."
  },
  
  // Engineering Books
  {
    id: '160',
    title: "507 Mechanical Movements",
    author: "Henry T. Brown",
    publishedYear: 1868,
    link: "https://www.goodreads.com/book/show/1383991.507_Mechanical_Movements",
    tags: ["engineering", "mechanical", "design", "reference", "mechanisms"],
    type: "book",
    description: "A classic compendium of mechanical movements, devices, and appliances."
  },
  {
    id: '161',
    title: "Open Circuits: The Inner Beauty of Electronic Components",
    author: "Eric Schlaepfer, Windell H. Oskay",
    publishedYear: 2022,
    link: "https://www.goodreads.com/book/show/61153639-open-circuits",
    tags: ["engineering", "electronics", "photography", "technology"],
    type: "book",
    description: "A photographic exploration of the inner beauty of electronic components."
  },
  
  // Sociology Books
  {
    id: '170',
    title: "Sociology: Themes and Perspectives",
    author: "Michael Haralambos & Martin Holborn",
    publishedYear: 1980,
    link: "https://www.goodreads.com/book/show/979410.Sociology",
    tags: ["sociology", "social science", "textbook", "society"],
    type: "book",
    description: "A comprehensive introduction to sociological concepts and theories."
  },
  
  // Mathematics Books
  // Books from mathematics-books.ts would go here
  
  // History Books (specific ones not already included above)
  {
    id: '110',
    title: "The Lessons of History",
    author: "Will and Ariel Durant",
    publishedYear: 1968,
    link: "https://www.goodreads.com/book/show/174713.The_Lessons_of_History",
    tags: ["history", "philosophy", "civilization", "sociology"],
    type: "book",
    description: "A concise survey of the culture and civilization of humankind."
  },
  {
    id: '111',
    title: "Bloodlands: Europe between Hitler and Stalin",
    author: "Timothy Snyder",
    publishedYear: 2010,
    link: "https://www.goodreads.com/book/show/6572270-bloodlands",
    tags: ["history", "world war 2", "holocaust", "stalin", "hitler", "eastern europe"],
    type: "book",
    description: "A history of Nazi and Soviet mass killing on the lands between Berlin and Moscow."
  },
  {
    id: '112',
    title: "The Horse, The Wheel, and Language",
    author: "David W. Anthony",
    publishedYear: 2007,
    link: "https://www.goodreads.com/book/show/1126410.The_Horse_the_Wheel_and_Language",
    tags: ["history", "archaeology", "linguistics", "anthropology", "indo-european"],
    type: "book",
    description: "How Bronze-Age riders from the Eurasian steppes shaped the modern world."
  },
  {
    id: '113',
    title: "The Decline and Fall of the Roman Empire",
    author: "Edward Gibbon",
    publishedYear: 1776,
    link: "https://www.goodreads.com/book/show/19400.The_Decline_and_Fall_of_the_Roman_Empire",
    tags: ["history", "roman empire", "ancient history", "classical studies"],
    type: "book",
    description: "A monumental work covering the history of the Roman Empire from the end of the second century to the fall of Constantinople."
  },
  {
    id: '114',
    title: "India's China War",
    author: "Neville Maxwell",
    publishedYear: 1970,
    link: "https://www.goodreads.com/book/show/2392438.India_s_China_War",
    tags: ["history", "war", "india", "china", "international relations"],
    type: "book",
    description: "An account of the 1962 border war between India and China."
  }
];

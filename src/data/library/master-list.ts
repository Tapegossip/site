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
    id: '2',
    title: "Meditations",
    author: "Marcus Aurelius",
    publishedYear: 180,
    link: "https://www.goodreads.com/book/show/30659.Meditations",
    tags: ["philosophy", "stoicism", "self-improvement", "wisdom", "ancient"],
    type: "book"
  },
  {
    id: '3',
    title: "Inadequate Equilibria",
    author: "Eliezer Yudkowsky",
    publishedYear: 2017,
    link: "https://www.lesswrong.com/s/oLGCcbnvabyibnG9d",
    tags: ["rationality", "economics", "decision making", "institutions"],
    type: "book"
  },
  {
    id: '4',
    title: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    publishedYear: 1962,
    link: "https://www.goodreads.com/book/show/61539.The_Structure_of_Scientific_Revolutions",
    tags: ["philosophy of science", "history of science", "paradigm shifts"],
    type: "book"
  },
  {
    id: '5',
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/30257963-12-rules-for-life",
    tags: ["psychology", "self-help", "philosophy", "ethics", "personal development"],
    type: "book",
    description: "A guide for living a more meaningful life with rules based on ancient traditions, psychology, and stories."
  },
  {
    id: '6',
    title: "Essays in Existentialism",
    author: "Jean-Paul Sartre",
    publishedYear: 1965,
    link: "https://www.goodreads.com/book/show/20518.Essays_in_Existentialism",
    tags: ["philosophy", "existentialism", "essays", "consciousness"],
    type: "book",
    description: "A collection of essays exploring Sartre's existentialist philosophy."
  },
  {
    id: '7',
    title: "Plato and a Platypus Walk into a Bar",
    author: "Thomas Cathcart, Daniel Klein",
    publishedYear: 2007,
    link: "https://www.goodreads.com/book/show/180506.Plato_and_a_Platypus_Walk_into_a_Bar_",
    tags: ["philosophy", "humor", "introduction", "concepts"],
    type: "book",
    description: "Understanding philosophy through jokes."
  },
  {
    id: '8',
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
    id: '9',
    title: "The ANXIOUS Investor",
    author: "Scott Nations",
    publishedYear: 2022,
    link: "https://www.goodreads.com/search?q=The%20ANXIOUS%20Investor+Scott%20Nations",
    tags: ["finance", "investing", "psychology", "book"],
    type: "book",
    description: "An examination of how emotions, particularly anxiety, affect investment decisions and how to overcome these psychological barriers."
  },
  {
    id: '10',
    title: "The End of Accounting",
    author: "Baruch Lev, Feng Gu",
    publishedYear: 2016,
    link: "https://www.goodreads.com/search?q=The%20End%20of%20Accounting+Baruch%20Lev%2C%20Feng%20Gu",
    tags: ["finance", "accounting", "financial analysis", "book"],
    type: "book",
    description: "A critical look at the relevance of traditional financial reports in the modern economy and proposals for a new reporting paradigm."
  },
  {
    id: '11',
    title: "Heard on The Street",
    author: "Timothy Falcon Crack",
    publishedYear: 2014,
    link: "https://www.goodreads.com/book/show/22306706-heard-on-the-street",
    tags: ["finance", "quantitative", "interviews", "wall street", "investment banking"],
    type: "book",
    description: "Quantitative questions from Wall Street job interviews with detailed solutions."
  },
  {
    id: '12',
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
    id: '13',
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
    id: '14',
    title: "Status as a Service (StaaS)",
    author: "Eugene Wei",
    publishedYear: 2019,
    link: "https://www.eugenewei.com/blog/2019/2/19/status-as-a-service",
    tags: ["social media", "network effects", "status", "technology", "society"],
    type: "article"
  },
  {
    id: '15',
    title: "AI Superpowers",
    author: "Kai-Fu Lee",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/38242135-ai-superpowers",
    tags: ["technology", "artificial intelligence", "china", "silicon valley", "future"],
    type: "book",
    description: "A perspective on the future of AI and the technological competition between China and the United States."
  },
  {
    id: '16',
    title: "AI 2041",
    author: "Kai-Fu Lee",
    publishedYear: 2021,
    link: "https://www.goodreads.com/book/show/55968563-ai-2041",
    tags: ["technology", "artificial intelligence", "future", "science fiction"],
    type: "book",
    description: "Ten stories set in 2041 exploring how AI might transform our world over the next 20 years."
  },
  {
    id: '17',
    title: "Artificial Intelligence: A Guide for Thinking Humans",
    author: "Melanie Mitchell",
    publishedYear: 2019,
    link: "https://www.goodreads.com/book/show/43565311-artificial-intelligence",
    tags: ["technology", "artificial intelligence", "computer science", "machine learning"],
    type: "book",
    description: "A balanced and accessible overview of AI technologies and their implications."
  },
  {
    id: '18',
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
    id: '19',
    title: "The Singapore Story",
    author: "Lee Kuan Yew (LKY)",
    publishedYear: 1998,
    link: "https://www.goodreads.com/book/show/189599.The_Singapore_Story",
    tags: ["history", "biography", "politics", "singapore", "memoir"],
    type: "book",
    description: "The first volume of Lee Kuan Yew's memoirs, covering Singapore's path to independence."
  },
  {
    id: '20',
    title: "From Third World to First: The Singapore Story: 1965-2000",
    author: "Lee Kuan Yew (LKY)",
    publishedYear: 2000,
    link: "https://www.goodreads.com/book/show/144409.From_Third_World_to_First",
    tags: ["history", "biography", "politics", "singapore", "economics", "development"],
    type: "book",
    description: "Lee Kuan Yew's account of how Singapore developed from a third world country into a modern economic powerhouse."
  },
  {
    id: '21',
    title: "COVID-19: The Great Reset",
    author: "Klaus Schwab, Thierry Malleret",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/54498122-covid-19",
    tags: ["economics", "politics", "society", "pandemic", "future", "business"],
    type: "book",
    description: "Examines the far-reaching implications of the COVID-19 pandemic on society, economics, and global politics."
  },
  {
    id: '22',
    title: "The Goal: A Process of Ongoing Improvement",
    author: "Eliyahu M. Goldratt, Jeff Cox",
    publishedYear: 1984,
    link: "https://www.goodreads.com/book/show/113934.The_Goal",
    tags: ["business", "management", "productivity", "manufacturing", "operations"],
    type: "book",
    description: "A business novel that introduces the Theory of Constraints for improving process efficiency."
  },
  {
    id: '23',
    title: "Hidden Champions",
    author: "Hermann Simons",
    publishedYear: 2009,
    link: "https://www.goodreads.com/search?q=Hidden%20Champions+Hermann%20Simons",
    tags: ["finance", "business", "strategy", "book"],
    type: "book",
    description: "An analysis of mid-sized, unknown world market leaders and their successful business strategies."
  },
  {
    id: '24',
    title: "Principles",
    author: "Ray Dalio",
    publishedYear: 2017,
    link: "https://www.goodreads.com/book/show/34536488-principles",
    tags: ["business", "leadership", "decision making", "management"],
    type: "book"
  },
  {
    id: '25',
    title: "Good to Great",
    author: "Jim Collins",
    publishedYear: 2001,
    link: "https://www.goodreads.com/book/show/76865.Good_to_Great",
    tags: ["business", "leadership", "management", "success"],
    type: "book"
  },
  
  // Self-Improvement Books
  {
    id: '26',
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    publishedYear: 2011,
    link: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow",
    tags: ["psychology", "behavioral economics", "decision making", "cognitive biases", "self-improvement"],
    type: "book",
    description: "Nobel Prize winner Daniel Kahneman's groundbreaking work on the two systems that drive the way we think."
  },
  {
    id: '27',
    title: "Noise: A Flaw in Human Judgment",
    author: "Daniel Kahneman, Olivier Sibony, Cass R. Sunstein",
    publishedYear: 2021,
    link: "https://www.goodreads.com/book/show/55339408-noise",
    tags: ["psychology", "decision making", "behavioral economics", "judgment"],
    type: "book",
    description: "An exploration of how noise (random variability) affects our decision-making processes."
  },
  {
    id: '28',
    title: "Thinking in Bets",
    author: "Annie Duke",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/35957157-thinking-in-bets",
    tags: ["decision making", "psychology", "poker", "uncertainty"],
    type: "book",
    description: "Making smarter decisions when you don't have all the facts."
  },
  {
    id: '29',
    title: "Show Your Work",
    author: "Austin Kleon",
    publishedYear: 2014,
    link: "https://www.goodreads.com/book/show/18290401-show-your-work",
    tags: ["creativity", "art", "career", "self-improvement"],
    type: "book"
  },
  {
    id: '30',
    title: "How To Win Friends and Influence People",
    author: "Dale Carnegie",
    publishedYear: 1936,
    link: "https://www.goodreads.com/book/show/4865.How_to_Win_Friends_and_Influence_People",
    tags: ["self-help", "psychology", "communication", "relationships"],
    type: "book"
  },
  {
    id: '31',
    title: "Atomic Habits",
    author: "James Clear",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/40121378-atomic-habits",
    tags: ["self-improvement", "habits", "psychology", "productivity"],
    type: "book"
  },
  {
    id: '32',
    title: "The One Thing",
    author: "Gary Keller",
    publishedYear: 2013,
    link: "https://www.goodreads.com/book/show/16256798-the-one-thing",
    tags: ["productivity", "focus", "business", "self-improvement"],
    type: "book"
  },
  {
    id: '33',
    title: "The Way of the Superior Man",
    author: "David Deida",
    publishedYear: 2004,
    link: "https://www.goodreads.com/book/show/79424.The_Way_of_the_Superior_Man",
    tags: ["masculinity", "spirituality", "relationships", "self-help"],
    type: "book"
  },
  
  // Fiction Books
  {
    id: '34',
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
    id: '35',
    title: "How to Know a Person",
    author: "David Brooks",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/145335868-how-to-know-a-person",
    tags: ["psychology", "relationships", "communication", "empathy"],
    type: "book",
    description: "The art of seeing others deeply and being deeply seen."
  },
  {
    id: '36',
    title: "The Road to Character",
    author: "David Brooks",
    publishedYear: 2015,
    link: "https://www.goodreads.com/book/show/22551809-the-road-to-character",
    tags: ["psychology", "character", "virtue", "personal development"],
    type: "book",
    description: "Explores the path to a deeper and more meaningful life through moral virtues."
  },
  {
    id: '37',
    title: "Awe: The New Science of Everyday Wonder",
    author: "Dacher Keltner",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/60462832-awe",
    tags: ["psychology", "emotion", "wonder", "wellbeing", "science"],
    type: "book",
    description: "How the science of awe can transform your life."
  },
  {
    id: '38',
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
    id: '39',
    title: "Black Holes & Time Warps",
    author: "Kip Stephen Thorne",
    publishedYear: 1994,
    link: "https://www.goodreads.com/book/show/17362.Black_Holes_Time_Warps",
    tags: ["physics", "cosmology", "black holes", "relativity", "popular science"],
    type: "book",
    description: "An accessible explanation of Einstein's relativity theory and black holes."
  },
  {
    id: '40',
    title: "The Road to Reality",
    author: "Roger Penrose",
    publishedYear: 2004,
    link: "https://www.goodreads.com/book/show/10638.The_Road_to_Reality",
    tags: ["physics", "mathematics", "cosmology", "quantum mechanics"],
    type: "book",
    description: "A complete guide to the laws of the universe."
  },
  {
    id: '41',
    title: "Methods of Theoretical Physics",
    author: "Philip M. Morse, Herman Feshbach",
    publishedYear: 1953,
    link: "https://www.goodreads.com/book/show/205915.Methods_of_Theoretical_Physics",
    tags: ["physics", "mathematics", "theoretical physics", "textbook"],
    type: "book",
    description: "A classic and comprehensive reference on mathematical methods in theoretical physics."
  },
  {
    id: '42',
    title: "Mathematical Methods for Physicists",
    author: "Arfken, Weber, Harris",
    publishedYear: 2012,
    link: "https://www.goodreads.com/book/show/114404.Mathematical_Methods_for_Physicists",
    tags: ["physics", "mathematics", "methods", "textbook"],
    type: "book",
    description: "A comprehensive guide to mathematical methods used in physics."
  },
  {
    id: '43',
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
    id: '44',
    title: "Cosmos",
    author: "Carl Sagan",
    publishedYear: 1980,
    link: "https://www.goodreads.com/book/show/55030.Cosmos",
    tags: ["astronomy", "science", "physics", "cosmology", "popular science"],
    type: "book",
    description: "Carl Sagan's classic exploration of the universe and humanity's place within it."
  },
  {
    id: '45',
    title: "Pale Blue Dot: A Vision of Human Future in Space",
    author: "Carl Sagan",
    publishedYear: 1994,
    link: "https://www.goodreads.com/book/show/61663.Pale_Blue_Dot",
    tags: ["astronomy", "science", "space exploration", "cosmology"],
    type: "book",
    description: "Inspired by the famous 'pale blue dot' photograph, Sagan reflects on humanity's place in the cosmos."
  },
  {
    id: '46',
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
    id: '47',
    title: "Prisoners of Geography",
    author: "Tim Marshall",
    publishedYear: 2015,
    link: "https://www.goodreads.com/book/show/25135194-prisoners-of-geography",
    tags: ["geography", "geopolitics", "international relations", "politics"],
    type: "book",
    description: "Ten maps that explain everything about the world."
  },
  {
    id: '48',
    title: "The Revenge of Geography",
    author: "Robert D. Kaplan",
    publishedYear: 2012,
    link: "https://www.goodreads.com/book/show/13330422-the-revenge-of-geography",
    tags: ["geography", "geopolitics", "international relations", "politics"],
    type: "book",
    description: "What the map tells us about coming conflicts and the battle against fate."
  },
  {
    id: '49',
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
    id: '50',
    title: "The Grand Chessboard",
    author: "Zbigniew Brzezinski",
    publishedYear: 1997,
    link: "https://www.goodreads.com/book/show/46674.The_Grand_Chessboard",
    tags: ["politics", "geopolitics", "international relations", "strategy"],
    type: "book",
    description: "American primacy and its geostrategic imperatives."
  },
  {
    id: '51',
    title: "Nasty Politics",
    author: "Thomas Zeitzoff",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/151313219-nasty-politics",
    tags: ["politics", "psychology", "communication", "political science"],
    type: "book",
    description: "The logic of insults, threats, and incitement in political discourse."
  },
  {
    id: '52',
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
    id: '53',
    title: "507 Mechanical Movements",
    author: "Henry T. Brown",
    publishedYear: 1868,
    link: "https://www.goodreads.com/book/show/1383991.507_Mechanical_Movements",
    tags: ["engineering", "mechanical", "design", "reference", "mechanisms"],
    type: "book",
    description: "A classic compendium of mechanical movements, devices, and appliances."
  },
  {
    id: '54',
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
    id: '55',
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
    id: '56',
    title: "The Lessons of History",
    author: "Will and Ariel Durant",
    publishedYear: 1968,
    link: "https://www.goodreads.com/book/show/174713.The_Lessons_of_History",
    tags: ["history", "philosophy", "civilization", "sociology"],
    type: "book",
    description: "A concise survey of the culture and civilization of humankind."
  },
  {
    id: '57',
    title: "Bloodlands: Europe between Hitler and Stalin",
    author: "Timothy Snyder",
    publishedYear: 2010,
    link: "https://www.goodreads.com/book/show/6572270-bloodlands",
    tags: ["history", "world war 2", "holocaust", "stalin", "hitler", "eastern europe"],
    type: "book",
    description: "A history of Nazi and Soviet mass killing on the lands between Berlin and Moscow."
  },
  {
    id: '58',
    title: "The Horse, The Wheel, and Language",
    author: "David W. Anthony",
    publishedYear: 2007,
    link: "https://www.goodreads.com/book/show/1126410.The_Horse_the_Wheel_and_Language",
    tags: ["history", "archaeology", "linguistics", "anthropology", "indo-european"],
    type: "book",
    description: "How Bronze-Age riders from the Eurasian steppes shaped the modern world."
  },
  {
    id: '59',
    title: "The Decline and Fall of the Roman Empire",
    author: "Edward Gibbon",
    publishedYear: 1776,
    link: "https://www.goodreads.com/book/show/19400.The_Decline_and_Fall_of_the_Roman_Empire",
    tags: ["history", "roman empire", "ancient history", "classical studies"],
    type: "book",
    description: "A monumental work covering the history of the Roman Empire from the end of the second century to the fall of Constantinople."
  },
  {
    id: '60',
    title: "India's China War",
    author: "Neville Maxwell",
    publishedYear: 1970,
    link: "https://www.goodreads.com/search?q=India's%20China%20War+Neville%20Maxwell",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of the India-China war and its implications for the region."
  },

  // Additional books from books.json
  {
    id: '61',
    title: "How I made $2,000,000 in the Stock Market",
    author: "Nicolas Darvas",
    publishedYear: 1960,
    link: "https://www.goodreads.com/search?q=How%20I%20made%20%242%2C000%2C000%20in%20the%20Stock%20Market+Nicolas%20Darvas",
    tags: ["finance", "investing", "money", "book"],
    type: "book",
    description: "Insights into stock market investing and trading strategies by Nicolas Darvas."
  },
  {
    id: '62',
    title: "How to Make Money In Stocks",
    author: "William J. O'Neil",
    publishedYear: 1988,
    link: "https://www.goodreads.com/book/show/795225.How_to_Make_Money_in_Stocks",
    tags: ["finance", "investing", "money", "book"],
    type: "book",
    description: "Insights into stock market investing and trading strategies by William J. O'Neil."
  },
  {
    id: '63',
    title: "Trade like a Stock Market Wizard",
    author: "Mark Minervini",
    publishedYear: 2013,
    link: "https://www.goodreads.com/search?q=Trade%20like%20a%20Stock%20Market%20Wizard+Mark%20Minervini",
    tags: ["finance", "investing", "trading", "stock market", "book"],
    type: "book",
    description: "Insights into stock market investing and trading strategies by Mark Minervini."
  },
  {
    id: '64',
    title: "Think & Trade like a Champion",
    author: "Mark Minervini",
    publishedYear: 2015,
    link: "https://www.goodreads.com/search?q=Think%20%26%20Trade%20like%20a%20Champion+Mark%20Minervini",
    tags: ["finance", "investing", "trading", "stock market", "book"],
    type: "book",
    description: "Insights into stock market investing and trading strategies by Mark Minervini."
  },
  {
    id: '65',
    title: "Mindset Secrets for Winning",
    author: "Mark Minervini",
    publishedYear: 2017,
    link: "https://www.goodreads.com/search?q=Mindset%20Secrets%20for%20Winning+Mark%20Minervini",
    tags: ["finance", "investing", "psychology", "mindset", "book"],
    type: "book",
    description: "A guide to developing the psychological edge needed for successful investing by Mark Minervini."
  },
  {
    id: '66',
    title: "How to trade in Stocks",
    author: "Jesse Livermore",
    publishedYear: 1940,
    link: "https://www.goodreads.com/search?q=How%20to%20trade%20in%20Stocks+Jesse%20Livermore",
    tags: ["finance", "investing", "trading", "stock market", "book"],
    type: "book",
    description: "Insights into stock market investing and trading strategies by Jesse Livermore, one of the greatest traders of all time."
  },
  {
    id: '67',
    title: "Reminiscenes of a Stock Operator",
    author: "Edwin Lefevre",
    publishedYear: 1923,
    link: "https://www.goodreads.com/search?q=Reminiscenes%20of%20a%20Stock%20Operator+Edwin%20Lefevre",
    tags: ["finance", "investing", "trading", "stock market", "book"],
    type: "book",
    description: "A fictionalized account of the life of stock market legend Jesse Livermore, offering timeless insights into trading psychology and market dynamics."
  },
  {
    id: '68',
    title: "The Dow Theory",
    author: "Robert Rhea",
    publishedYear: 2013,
    link: "https://www.goodreads.com/search?q=The%20Dow%20Theory+Robert%20Rhea",
    tags: ["finance", "investing", "technical analysis", "book"],
    type: "book",
    description: "A comprehensive explanation of the Dow Theory, one of the foundations of technical analysis in stock market trading."
  },
  {
    id: '69',
    title: "Super Stocks",
    author: "Kenneth Fisher",
    publishedYear: 1984,
    link: "https://www.goodreads.com/search?q=Super%20Stocks+Kenneth%20Fisher",
    tags: ["finance", "investing", "stock market", "book"],
    type: "book",
    description: "Insights into identifying and investing in exceptional growth stocks by Kenneth Fisher."
  },
  {
    id: '70',
    title: "The Only Three Questions that Count",
    author: "Kenneth Fisher",
    publishedYear: 2006,
    link: "https://www.goodreads.com/search?q=The%20Only%20Three%20Questions%20that%20Count+Kenneth%20Fisher",
    tags: ["finance", "investing", "stock market", "book"],
    type: "book",
    description: "A framework for investment decision-making based on three fundamental questions that can help investors achieve better results."
  },
  {
    id: '71',
    title: "Beat the Crowd",
    author: "Kenneth Fisher",
    publishedYear: 2015,
    link: "https://www.goodreads.com/search?q=Beat%20the%20Crowd+Kenneth%20Fisher",
    tags: ["finance", "investing", "contrarian", "book"],
    type: "book",
    description: "A guide to contrarian investing strategies that can help outperform the market by Kenneth Fisher."
  },
  {
    id: '72',
    title: "The little book of Market Myths",
    author: "Kenneth Fisher",
    publishedYear: 2013,
    link: "https://www.goodreads.com/search?q=The%20little%20book%20of%20Market%20Myths+Kenneth%20Fisher",
    tags: ["finance", "investing", "stock market", "book"],
    type: "book",
    description: "A debunking of common market misconceptions that could be harming your portfolio."
  },
  {
    id: '73',
    title: "Value Investing and Behavioral Finance",
    author: "Parag Parikh",
    publishedYear: 2009,
    link: "https://www.goodreads.com/search?q=Value%20Investing%20and%20Behavioral%20Finance+Parag%20Parikh",
    tags: ["finance", "investing", "value investing", "behavioral finance", "book"],
    type: "book",
    description: "An exploration of value investing principles combined with insights from behavioral finance to improve investment results."
  },
  {
    id: '74',
    title: "Stock to Riches",
    author: "Parag Parikh",
    publishedYear: 2005,
    link: "https://www.goodreads.com/search?q=Stock%20to%20Riches+Parag%20Parikh",
    tags: ["finance", "investing", "stock market", "book"],
    type: "book",
    description: "Insights into building wealth through strategic stock market investments by Parag Parikh."
  },
  {
    id: '75',
    title: "Best Loser Wins",
    author: "Tom Hougaard",
    publishedYear: 2022,
    link: "https://www.goodreads.com/search?q=Best%20Loser%20Wins+Tom%20Hougaard",
    tags: ["finance", "trading", "psychology", "book"],
    type: "book",
    description: "A guide to trading psychology and risk management techniques from a professional trader."
  },
  {
    id: '76',
    title: "Stan Weinstein's Secrets for Profiting in Bull and Bear Markets",
    author: "Stan Weinstein",
    publishedYear: 1992,
    link: "https://www.goodreads.com/search?q=Stan%20Weinstein's%20Secrets%20for%20Profiting%20in%20Bull%20and%20Bear%20Markets+Stan%20Weinstein",
    tags: ["finance", "investing", "trading", "technical analysis", "book"],
    type: "book",
    description: "A comprehensive guide to technical analysis and market stage identification for profiting in different market conditions."
  },
  {
    id: '77',
    title: "The Trading MindWheel",
    author: "Michael Lamothe",
    publishedYear: 2023,
    link: "https://www.goodreads.com/search?q=The%20Trading%20MindWheel+Michael%20Lamothe",
    tags: ["finance", "trading", "psychology", "book"],
    type: "book",
    description: "A framework for developing the mental skills needed for successful trading."
  },
  {
    id: '78',
    title: "What I Learnt about Investing from Darwin",
    author: "Pulak Prasad",
    publishedYear: 2023,
    link: "https://www.goodreads.com/search?q=What%20I%20Learnt%20about%20Investing%20from%20Darwin+Pulak%20Prasad",
    tags: ["finance", "investing", "evolution", "book"],
    type: "book",
    description: "An exploration of investment principles through the lens of evolutionary theory by Pulak Prasad."
  },
  {
    id: '79',
    title: "Complete Guide To Price Action Trading",
    author: "Steve Burns & Holly Burns",
    publishedYear: 2022,
    link: "https://www.goodreads.com/search?q=Complete%20Guide%20To%20Price%20Action%20Trading+Steve%20Burns%20%26%20Holly%20Burns",
    tags: ["finance", "trading", "technical analysis", "price action", "book"],
    type: "book",
    description: "A comprehensive guide to trading based on price action analysis without relying on indicators."
  },
  {
    id: '80',
    title: "The TAO of CHARLIE MUNGER",
    author: "David Clark",
    publishedYear: 2017,
    link: "https://www.goodreads.com/search?q=The%20TAO%20of%20CHARLIE%20MUNGER+David%20Clark",
    tags: ["finance", "investing", "wisdom", "book"],
    type: "book",
    description: "A collection of quotes and wisdom from Charlie Munger, Warren Buffett's business partner and vice chairman of Berkshire Hathaway."
  },
  {
    id: '81',
    title: "Definitive Guide to Position Sizing",
    author: "Van K. Tharp",
    publishedYear: 2013,
    link: "https://www.goodreads.com/search?q=Definitive%20Guide%20to%20Position%20Sizing+Van%20K.%20Tharp",
    tags: ["finance", "trading", "risk management", "book"],
    type: "book",
    description: "A comprehensive guide to determining optimal position sizes in trading to manage risk and maximize returns."
  },
  {
    id: '82',
    title: "Fooling Some of the People ALL Of The Time",
    author: "David Einhorn",
    publishedYear: 2011,
    link: "https://www.goodreads.com/search?q=Fooling%20Some%20of%20the%20People%20ALL%20Of%20The%20Time+David%20Einhorn",
    tags: ["finance", "investing", "short selling", "book"],
    type: "book",
    description: "The story of hedge fund manager David Einhorn's battle with Allied Capital, exploring corporate fraud and the challenges of short selling."
  },
  {
    id: '83',
    title: "Trading Systems and Methods",
    author: "Perry J. Kaufman",
    publishedYear: 1998,
    link: "https://www.goodreads.com/search?q=Trading%20Systems%20and%20Methods+Perry%20J.%20Kaufman",
    tags: ["finance", "trading", "systems", "quantitative", "book"],
    type: "book",
    description: "A comprehensive reference on various trading systems and methods with detailed analysis of their effectiveness."
  },
  {
    id: '84',
    title: "The Richard D.Wyckoff Method of Trading in Stocks: TAPE READING AND ACTIVE TRADING",
    author: "Richard D. Wyckoff",
    publishedYear: 1931,
    link: "https://www.goodreads.com/search?q=The%20Richard%20D.Wyckoff%20Method%20of%20Trading%20in%20Stocks%3A%20TAPE%20READING%20AND%20ACTIVE%20TRADING+Richard%20D.%20Wyckoff",
    tags: ["finance", "trading", "technical analysis", "book"],
    type: "book",
    description: "A classic text on the Wyckoff method of technical analysis, focusing on supply and demand dynamics in the market."
  },
  {
    id: '85',
    title: "Superperformance stocks: An investment strategy for the individual investor based on the 4-year political cycle",
    author: "Richard S. Love",
    publishedYear: 1977,
    link: "https://www.goodreads.com/search?q=Superperformance%20stocks%3A%20An%20investment%20strategy%20for%20the%20individual%20investor%20based%20on%20the%204-year%20political%20cycle+Richard%20S.%20Love",
    tags: ["finance", "investing", "stock market", "political cycles", "book"],
    type: "book",
    description: "An exploration of how political cycles affect stock market performance and strategies to capitalize on these patterns."
  },
  {
    id: '86',
    title: "The Hour Between DOG and wolf",
    author: "John H. Coates",
    publishedYear: 2012,
    link: "https://www.goodreads.com/search?q=The%20Hour%20Between%20DOG%20and%20wolf+John%20H.%20Coates",
    tags: ["finance", "trading", "neuroscience", "psychology", "book"],
    type: "book",
    description: "An examination of how biology and neuroscience influence financial risk-taking and decision making among traders and investors."
  },
  {
    id: '87',
    title: "Advanced FUTURES Trading Strategies",
    author: "Robert Craver",
    publishedYear: 2023,
    link: "https://www.goodreads.com/search?q=Advanced%20FUTURES%20Trading%20Strategies+Robert%20Craver",
    tags: ["finance", "trading", "futures", "book"],
    type: "book",
    description: "A detailed guide to sophisticated strategies for trading futures contracts in various market conditions."
  },
  {
    id: '88',
    title: "Essays in Existentialism",
    author: "Jean-Paul Sartre",
    publishedYear: 1965,
    link: "https://www.goodreads.com/search?q=Essays%20in%20Existentialism+Jean-Paul%20Sartre",
    tags: ["philosophy", "existentialism", "book"],
    type: "book",
    description: "A collection of fundamental essays on existentialist philosophy by one of its leading proponents, Jean-Paul Sartre."
  },
  {
    id: '89',
    title: "Margin of Safety",
    author: "Seth A. Klarman",
    publishedYear: 1991,
    link: "https://www.goodreads.com/search?q=Margin%20of%20Safety+Seth%20A.%20Klarman",
    tags: ["finance", "investing", "value investing", "book"],
    type: "book",
    description: "A rare and highly sought-after classic on value investing principles by the founder of Baupost Group, focusing on risk management and investment philosophy."
  },
  {
    id: '90',
    title: "One Up On Wall Street",
    author: "Peter Lynch",
    publishedYear: 1989,
    link: "https://www.goodreads.com/book/show/113934.One_Up_On_Wall_Street",
    tags: ["finance", "investing", "stock market", "book"],
    type: "book",
    description: "Peter Lynch's classic guide on how individual investors can use everyday knowledge to achieve better investment results than professionals."
  },
  {
    id: '91',
    title: "Japanese Candlestick Charting Techniques",
    author: "Steve Nison",
    publishedYear: 1991,
    link: "https://www.goodreads.com/search?q=Japanese%20Candlestick%20Charting%20Techniques+Steve%20Nison",
    tags: ["finance", "trading", "technical analysis", "candlesticks", "book"],
    type: "book",
    description: "The definitive guide to Japanese candlestick charting, introducing Western traders to these powerful technical analysis tools."
  },
  {
    id: '92',
    title: "The Mental Game of Trading",
    author: "Jared Tendler. M.S",
    publishedYear: 2021,
    link: "https://www.goodreads.com/search?q=The%20Mental%20Game%20of%20Trading+Jared%20Tendler.%20M.S",
    tags: ["finance", "trading", "psychology", "book"],
    type: "book",
    description: "A guide to understanding and overcoming the psychological challenges that affect trading performance, written by a renowned mental game coach."
  },
  {
    id: '93',
    title: "Technical Analysis Explained",
    author: "Martin J. Pring",
    publishedYear: 1991,
    link: "https://www.goodreads.com/search?q=Technical%20Analysis%20Explained+Martin%20J.%20Pring",
    tags: ["finance", "trading", "technical analysis", "book"],
    type: "book",
    description: "A comprehensive guide to technical analysis methods and their application in market forecasting and trading."
  },
  {
    id: '94',
    title: "Introduction to Modern Statistics",
    author: "Mine Çetinkaya-Rundel, Johanna Hardin",
    publishedYear: 2021,
    link: "https://www.goodreads.com/search?q=Introduction%20to%20Modern%20Statistics+Mine%20%C3%87etinkaya-Rundel%2C%20Johanna%20Hardin",
    tags: ["mathematics", "statistics", "data science", "book"],
    type: "book",
    description: "A modern introduction to statistical concepts and methods with applications in data science and analytics."
  },
  {
    id: '95',
    title: "The New High-New Low Index",
    author: "Dr. Alexander Elder & Kerry Lovvorn",
    publishedYear: 2013,
    link: "https://www.goodreads.com/search?q=The%20New%20High-New%20Low%20Index+Dr.%20Alexander%20Elder%20%26%20Kerry%20Lovvorn",
    tags: ["finance", "trading", "technical analysis", "book"],
    type: "book",
    description: "A guide to using the New High-New Low Index as a powerful tool for market timing and trade selection."
  },
  {
    id: '96',
    title: "Capital Allocators",
    author: "Ted Seides",
    publishedYear: 2021,
    link: "https://www.goodreads.com/search?q=Capital%20Allocators+Ted%20Seides",
    tags: ["finance", "investing", "asset management", "book"],
    type: "book",
    description: "Insights from interviews with leading capital allocators on investment strategies, manager selection, and portfolio construction."
  },
  {
    id: '97',
    title: "Options Volatility and Pricing",
    author: "Sheldon Natenberg",
    publishedYear: 1994,
    link: "https://www.goodreads.com/search?q=Options%20Volatility%20and%20Pricing+Sheldon%20Natenberg",
    tags: ["finance", "options", "derivatives", "volatility", "book"],
    type: "book",
    description: "A comprehensive guide to options trading, focusing on volatility and its role in options pricing and trading strategies."
  },
  {
    id: '98',
    title: "Options, Futures and Other Derivatives",
    author: "John Hull, Sankarsan Basu",
    publishedYear: 1997,
    link: "https://www.goodreads.com/search?q=Options%2C%20Futures%20and%20Other%20Derivatives+John%20Hull%2C%20Sankarsan%20Basu",
    tags: ["finance", "derivatives", "options", "futures", "book"],
    type: "book",
    description: "A comprehensive textbook on derivative instruments, markets, and risk management techniques."
  },
  {
    id: '99',
    title: "How Charts can help you in the Stock Market",
    author: "William Jiler",
    publishedYear: 1962,
    link: "https://www.goodreads.com/search?q=How%20Charts%20can%20help%20you%20in%20the%20Stock%20Market+William%20Jiler",
    tags: ["finance", "trading", "technical analysis", "charting", "book"],
    type: "book",
    description: "A classic introduction to technical analysis and chart patterns for stock market trading."
  },
  {
    id: '100',
    title: "Statistically Sound Indicators for Financial Market Prediction Algorithms in C++",
    author: "Timothy Masters",
    publishedYear: 2011,
    link: "https://www.goodreads.com/search?q=Statistically%20Sound%20Indicators+Timothy%20Masters",
    tags: ["finance", "trading", "book"],
    type: "book",
    description: "A guide to developing statistically sound indicators for financial market prediction."
  },
  {
    id: '101',
    title: "The Leverage Space Trading Model: Reconciling Portfolio Management Strategies and Economic Theory",
    author: "Ralph Vince",
    publishedYear: 2009,
    link: "https://www.goodreads.com/search?q=The%20Leverage%20Space%20Trading%20Model+Ralph%20Vince",
    tags: ["finance", "trading", "book"],
    type: "book",
    description: "A guide to reconciling portfolio management strategies and economic theory using the leverage space trading model."
  },
  {
    id: '102',
    title: "Mathematics of Financial Markets",
    author: "Robert J. Elliott, P. Ekkehard Kopp",
    publishedYear: 2005,
    link: "https://www.goodreads.com/search?q=Mathematics%20of%20Financial%20Markets+Robert%20J.%20Elliott%2C%20P.%20Ekkehard%20Kopp",
    tags: ["finance", "mathematics", "book"],
    type: "book",
    description: "A comprehensive guide to the mathematics of financial markets."
  },
  {
    id: '103',
    title: "Risky Business: Why Insurance Markets Fail and What to do About It",
    author: "Liran Einav, Amy Finkelstein, Ray Fisman",
    publishedYear: 2014,
    link: "https://www.goodreads.com/search?q=Risky%20Business+Liran%20Einav%2C%20Amy%20Finkelstein%2C%20Ray%20Fisman",
    tags: ["finance", "insurance", "book"],
    type: "book",
    description: "An exploration of why insurance markets fail and what can be done to address these issues."
  },
  {
    id: '104',
    title: "Citizen's Wealth: Why (and how) Sovereign Funds Should be Managed by the people for the people",
    author: "Angela Cummine",
    publishedYear: 2016,
    link: "https://www.goodreads.com/search?q=Citizen's%20Wealth+Angela%20Cummine",
    tags: ["finance", "economics", "book"],
    type: "book",
    description: "An exploration of how sovereign wealth funds can be managed for the benefit of the people."
  },
  {
    id: '105',
    title: "Public Banks: Decarbonisation, Definancialisation, and Democratisation",
    author: "Thomas Marois",
    publishedYear: 2021,
    link: "https://www.goodreads.com/search?q=Public%20Banks+Thomas%20Marois",
    tags: ["finance", "economics", "book"],
    type: "book",
    description: "An exploration of the role of public banks in decarbonisation, definancialisation, and democratisation."
  },
  {
    id: '106',
    title: "House of Debt: How they (and you) Caused the Great Recession, and How We can prevent it from Happening Again",
    author: "Atif Mian, Amir Sufi",
    publishedYear: 2014,
    link: "https://www.goodreads.com/search?q=House%20of%20Debt+Atif%20Mian%2C%20Amir%20Sufi",
    tags: ["finance", "economics", "book"],
    type: "book",
    description: "An exploration of the causes of the Great Recession and how it can be prevented in the future."
  },
  {
    id: '107',
    title: "Between Debt and the Devil: Money, Credit, And Fixing Global Finance",
    author: "Adair Turner",
    publishedYear: 2015,
    link: "https://www.goodreads.com/search?q=Between%20Debt%20and%20the%20Devil+Adair%20Turner",
    tags: ["finance", "economics", "book"],
    type: "book",
    description: "An exploration of the role of money and credit in global finance and how it can be fixed."
  },
  {
    id: '108',
    title: "Crashed: How a Decade of Financial Crises Changed the World",
    author: "Adam Tooze",
    publishedYear: 2018,
    link: "https://www.goodreads.com/search?q=Crashed+Adam+Tooze",
    tags: ["finance", "economics", "book"],
    type: "book",
    description: "An exploration of how a decade of financial crises changed the world."
  },
  {
    id: '109',
    title: "Adaptive Markets: Financial Evolution at the Speed of Thought",
    author: "Andrew W. Lo",
    publishedYear: 2017,
    link: "https://www.goodreads.com/search?q=Adaptive%20Markets+Andrew%20W.%20Lo",
    tags: ["finance", "economics", "book"],
    type: "book",
    description: "An exploration of the adaptive markets hypothesis and its implications for finance."
  },
  {
    id: '110',
    title: "Advanced Portfolio Management: A Quant's Guide for Fundamental Investors",
    author: "Giuseppe A. Paleologo",
    publishedYear: 2019,
    link: "https://www.goodreads.com/search?q=Advanced%20Portfolio%20Management+Giuseppe%20A.%20Paleologo",
    tags: ["finance", "investing", "book"],
    type: "book",
    description: "A guide to advanced portfolio management for fundamental investors."
  },
  {
    id: '111',
    title: "The American Challenge",
    author: "Jean-Jacques, Servan-Schreiber",
    publishedYear: 1967,
    link: "https://www.goodreads.com/search?q=The%20American%20Challenge+Jean-Jacques%2C%20Servan-Schreiber",
    tags: ["business", "economics", "book"],
    type: "book",
    description: "An exploration of the challenges facing America in the global economy."
  },
  {
    id: '112',
    title: "7 Powers: The Foundations of Business Strategy",
    author: "Hamilton Helmer",
    publishedYear: 2016,
    link: "https://www.goodreads.com/search?q=7%20Powers+Hamilton%20Helmer",
    tags: ["business", "strategy", "book"],
    type: "book",
    description: "A guide to the foundations of business strategy and the seven powers that drive success."
  },
  {
    id: '113',
    title: "Building Winning Algorithmic Trading Systems",
    author: "Kevin J. Davey",
    publishedYear: 2014,
    link: "https://www.goodreads.com/search?q=Building%20Winning%20Algorithmic%20Trading%20Systems+Kevin%20J.%20Davey",
    tags: ["finance", "trading", "book"],
    type: "book",
    description: "A guide to building winning algorithmic trading systems."
  },
  {
    id: '114',
    title: "New Concepts in Technical Trading Systems",
    author: "J. Welles Wilder Jr.",
    publishedYear: 1978,
    link: "https://www.goodreads.com/search?q=New%20Concepts%20in%20Technical%20Trading%20Systems+J.%20Welles%20Wilder%20Jr.",
    tags: ["finance", "trading", "book"],
    type: "book",
    description: "A guide to new concepts in technical trading systems."
  },
  {
    id: '115',
    title: "The Delta Phenomenon or Hidden Order in All Markets",
    author: "Welles Wilder",
    publishedYear: 1991,
    link: "https://www.goodreads.com/search?q=The%20Delta%20Phenomenon+Welles%20Wilder",
    tags: ["finance", "trading", "book"],
    type: "book",
    description: "An exploration of the delta phenomenon and hidden order in all markets."
  },
  {
    id: '116',
    title: "Capital in the Twenty-First Century",
    author: "Thomas Piketty",
    publishedYear: 2013,
    link: "https://www.goodreads.com/search?q=Capital%20in%20the%20Twenty-First%20Century+Thomas%20Piketty",
    tags: ["economics", "finance", "book"],
    type: "book",
    description: "An exploration of capital and inequality in the twenty-first century."
  },
  {
    id: '117',
    title: "Playbook",
    author: "Mike Bellafoire",
    publishedYear: 2013,
    link: "https://www.goodreads.com/search?q=Playbook+Mike+Bellafoire",
    tags: ["finance", "trading", "book"],
    type: "book",
    description: "A guide to developing a trading playbook and achieving success in the markets."
  },
  {
    id: '118',
    title: "Alpha Trader",
    author: "Brent Donnelly",
    publishedYear: 2021,
    link: "https://www.goodreads.com/search?q=Alpha%20Trader+Brent%20Donnelly",
    tags: ["finance", "trading", "book"],
    type: "book",
    description: "A guide to becoming an alpha trader and achieving success in the markets."
  },
  {
    id: '119',
    title: "Laws of Trading",
    author: "Agustin Lebron",
    publishedYear: 2019,
    link: "https://www.goodreads.com/search?q=Laws%20of%20Trading+Agustin%20Lebron",
    tags: ["finance", "trading", "book"],
    type: "book",
    description: "A guide to the laws of trading and achieving success in the markets."
  },
  {
    id: '120',
    title: "AI Superpowers",
    author: "Kai-Fu Lee",
    publishedYear: 2018,
    link: "https://www.goodreads.com/search?q=AI%20Superpowers+Kai-Fu%20Lee",
    tags: ["technology", "artificial intelligence", "book"],
    type: "book",
    description: "An exploration of the rise of artificial intelligence and its implications for the future."
  },
  {
    id: '121',
    title: "AI 2041",
    author: "Kai-Fu Lee",
    publishedYear: 2021,
    link: "https://www.goodreads.com/search?q=AI%202041+Kai-Fu%20Lee",
    tags: ["technology", "artificial intelligence", "book"],
    type: "book",
    description: "An exploration of the future of artificial intelligence and its impact on society."
  },
  {
    id: '122',
    title: "Artificial Intelligence: A guide for thinking humans",
    author: "Melanie Mitchell",
    publishedYear: 2019,
    link: "https://www.goodreads.com/search?q=Artificial%20Intelligence+Melanie%20Mitchell",
    tags: ["technology", "artificial intelligence", "book"],
    type: "book",
    description: "A guide to artificial intelligence and its implications for thinking humans."
  },
  {
    id: '123',
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    publishedYear: 2009,
    link: "https://www.goodreads.com/search?q=Introduction%20to%20Algorithms+Thomas%20H.%20Cormen%2C%20Charles%20E.%20Leiserson%2C%20Ronald%20L.%20Rivest%2C%20Clifford%20Stein",
    tags: ["technology", "computer science", "book"],
    type: "book",
    description: "A comprehensive guide to algorithms and their applications in computer science."
  },
  {
    id: '124',
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    publishedYear: 2017,
    link: "https://www.goodreads.com/search?q=Designing%20Data-Intensive%20Applications+Martin%20Kleppmann",
    tags: ["technology", "computer science", "book"],
    type: "book",
    description: "A guide to designing data-intensive applications and their applications in computer science."
  },
  {
    id: '125',
    title: "Naked Statistics: Stripping the Dread from the Data",
    author: "Charles Wheelan",
    publishedYear: 2013,
    link: "https://www.goodreads.com/search?q=Naked%20Statistics+Charles%20Wheelan",
    tags: ["mathematics", "statistics", "book"],
    type: "book",
    description: "A guide to statistics and their applications in data analysis."
  },
  {
    id: '126',
    title: "Probability Theory: The logic of Science",
    author: "E.T. Jaynes",
    publishedYear: 2003,
    link: "https://www.goodreads.com/search?q=Probability%20Theory+E.T.%20Jaynes",
    tags: ["mathematics", "probability", "book"],
    type: "book",
    description: "A comprehensive guide to probability theory and its applications in science."
  },
  {
    id: '127',
    title: "The art of Statistics: How to learn from Data",
    author: "David Spiegelhalter",
    publishedYear: 2019,
    link: "https://www.goodreads.com/search?q=The%20art%20of%20Statistics+David%20Spiegelhalter",
    tags: ["mathematics", "statistics", "book"],
    type: "book",
    description: "A guide to learning from data and the art of statistics."
  },
  {
    id: '128',
    title: "Best Practices in Data Cleaning",
    author: "Jason W. Osborne",
    publishedYear: 2013,
    link: "https://www.goodreads.com/search?q=Best%20Practices%20in%20Data%20Cleaning+Jason%20W.%20Osborne",
    tags: ["mathematics", "data science", "book"],
    type: "book",
    description: "A guide to best practices in data cleaning and their applications in data science."
  },
  {
    id: '129',
    title: "The Power Law",
    author: "Sebastian Mallaby",
    publishedYear: 2022,
    link: "https://www.goodreads.com/search?q=The%20Power%20Law+Sebastian%20Mallaby",
    tags: ["finance", "economics", "book"],
    type: "book",
    description: "An exploration of the power law and its implications for finance and economics."
  },
  {
    id: '130',
    title: "Zero to One",
    author: "Blake Masters, Peter Thiel",
    publishedYear: 2014,
    link: "https://www.goodreads.com/search?q=Zero%20to%20One+Blake%20Masters%2C%20Peter%20Thiel",
    tags: ["business", "entrepreneurship", "book"],
    type: "book",
    description: "A guide to entrepreneurship and building a successful business from zero to one."
  },
  {
    id: '131',
    title: "The Man who Bent Light",
    author: "Narinder Singh Kapany",
    publishedYear: 2020,
    link: "https://www.goodreads.com/search?q=The%20Man%20who%20Bent%20Light+Narinder%20Singh%20Kapany",
    tags: ["science", "physics", "book"],
    type: "book",
    description: "An exploration of the life and work of Narinder Singh Kapany, the man who bent light."
  },
  {
    id: '132',
    title: "Cryptonomicon",
    author: "Neal Stephenson",
    publishedYear: 1999,
    link: "https://www.goodreads.com/search?q=Cryptonomicon+Neal%20Stephenson",
    tags: ["fiction", "technology", "book"],
    type: "book",
    description: "A science fiction novel exploring the world of cryptography and technology."
  },
  {
    id: '133',
    title: "The path to Senior Product Designer: An Actionable Growth Plan for a UX Design Career",
    author: "Artiom Dashinsky",
    publishedYear: 2021,
    link: "https://www.goodreads.com/search?q=The%20path%20to%20Senior%20Product%20Designer+Artiom%20Dashinsky",
    tags: ["design", "career", "book"],
    type: "book",
    description: "A guide to becoming a senior product designer and achieving success in a UX design career."
  },
  {
    id: '134',
    title: "User Friendly: How the hidden rules of design are changing the way we live, work, and play",
    author: "Cliff Kuang, Robert Fabricant",
    publishedYear: 2019,
    link: "https://www.goodreads.com/search?q=User%20Friendly+Cliff%20Kuang%2C%20Robert%20Fabricant",
    tags: ["design", "technology", "book"],
    type: "book",
    description: "An exploration of the hidden rules of design and their impact on the way we live, work, and play."
  },
  {
    id: '135',
    title: "The Lean Startup",
    author: "Eric Ries",
    publishedYear: 2011,
    link: "https://www.goodreads.com/search?q=The%20Lean%20Startup+Eric%20Ries",
    tags: ["business", "entrepreneurship", "book"],
    type: "book",
    description: "A guide to building a successful startup using lean principles and methodologies."
  },
  {
    id: '136',
    title: "The Singapore Story",
    author: "Lee Kuan Yew (LKY)",
    publishedYear: 1998,
    link: "https://www.goodreads.com/search?q=The%20Singapore%20Story+Lee%20Kuan%20Yew",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of the history and development of Singapore, as told by its founding father, Lee Kuan Yew."
  },
  {
    id: '137',
    title: "From Third World to First: The Singapore Story: 1965-2000",
    author: "Lee Kuan Yew (LKY)",
    publishedYear: 2000,
    link: "https://www.goodreads.com/search?q=From%20Third%20World%20to%20First+Lee%20Kuan%20Yew",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of Singapore's transformation from a third world country to a first world nation, as told by its founding father, Lee Kuan Yew."
  },
  {
    id: '138',
    title: "Etymology Dictionary of Persian",
    author: "Garnik S. Asatrian",
    publishedYear: 2010,
    link: "https://www.goodreads.com/search?q=Etymology%20Dictionary%20of%20Persian+Garnik%20S.%20Asatrian",
    tags: ["language", "linguistics", "book"],
    type: "book",
    description: "A comprehensive etymology dictionary of the Persian language."
  },
  {
    id: '139',
    title: "As I See It (How Cayman Became a Leading Financial Centre)",
    author: "Sir Vassel Johnson",
    publishedYear: 2023,
    link: "https://www.goodreads.com/search?q=As%20I%20See%20It+Sir%20Vassel%20Johnson",
    tags: ["finance", "economics", "book"],
    type: "book",
    description: "An exploration of how the Cayman Islands became a leading financial centre, as told by Sir Vassel Johnson."
  },
  {
    id: '140',
    title: "India's China War",
    author: "Neville Maxwell",
    publishedYear: 1970,
    link: "https://www.goodreads.com/search?q=India's%20China%20War+Neville%20Maxwell",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of the India-China war and its implications for the region."
  },
  {
    id: '141',
    title: "The Horse The Wheel and Language",
    author: "David W. Anthony",
    publishedYear: 2007,
    link: "https://www.goodreads.com/search?q=The%20Horse%20The%20Wheel%20and%20Language+David%20W.%20Anthony",
    tags: ["history", "linguistics", "book"],
    type: "book",
    description: "An exploration of the role of the horse, the wheel, and language in the development of human civilization."
  },
  {
    id: '142',
    title: "The Indo-European Puzzle Revisited: Integrating Archaeology, Genetics, and Linguistics",
    author: "Kristian Kristiansen, Guus Kroonen, Eske Willerslev",
    publishedYear: 2022,
    link: "https://www.goodreads.com/search?q=The%20Indo-European%20Puzzle%20Revisited+Kristian%20Kristiansen%2C%20Guus%20Kroonen%2C%20Eske%20Willerslev",
    tags: ["history", "linguistics", "book"],
    type: "book",
    description: "An exploration of the Indo-European puzzle and its implications for archaeology, genetics, and linguistics."
  },
  {
    id: '143',
    title: "The Secret History of the JESUITS",
    author: "Edmond Paris",
    publishedYear: 1975,
    link: "https://www.goodreads.com/search?q=The%20Secret%20History%20of%20the%20JESUITS+Edmond%20Paris",
    tags: ["history", "religion", "book"],
    type: "book",
    description: "An exploration of the secret history of the Jesuits and their impact on the world."
  },
  {
    id: '144',
    title: "Crimes Unspoken: The rape of german women at the end of the second world war",
    author: "Miriam Gebhardt",
    publishedYear: 2015,
    link: "https://www.goodreads.com/search?q=Crimes%20Unspoken+Miriam%20Gebhardt",
    tags: ["history", "war", "book"],
    type: "book",
    description: "An exploration of the crimes committed against German women at the end of the Second World War."
  },
  {
    id: '145',
    title: "Other Losses: An investigation into the mass deaths of german prisoners at the hands of the french and americans after world war II",
    author: "James Bacque",
    publishedYear: 1989,
    link: "https://www.goodreads.com/search?q=Other%20Losses+James%20Bacque",
    tags: ["history", "war", "book"],
    type: "book",
    description: "An investigation into the mass deaths of German prisoners at the hands of the French and Americans after World War II."
  },
  {
    id: '146',
    title: "Hellstorm: The Death of Nazi Germany, 1944-1947",
    author: "Thomas Goodrich",
    publishedYear: 2010,
    link: "https://www.goodreads.com/search?q=Hellstorm+Thomas%20Goodrich",
    tags: ["history", "war", "book"],
    type: "book",
    description: "An exploration of the death of Nazi Germany and the events that followed from 1944 to 1947."
  },
  {
    id: '147',
    title: "The Fall of the Mughal Empire",
    author: "Jadunath Sarkar",
    publishedYear: 1971,
    link: "https://www.goodreads.com/search?q=The%20Fall%20of%20the%20Mughal%20Empire+Jadunath%20Sarkar",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of the fall of the Mughal Empire and its implications for the region."
  },
  {
    id: '148',
    title: "The Russian Civil Wars 1916-1926: Ten Years that shook the World",
    author: "Jonathan D. Smele",
    publishedYear: 2016,
    link: "https://www.goodreads.com/search?q=The%20Russian%20Civil%20Wars+Jonathan%20D.%20Smele",
    tags: ["history", "war", "book"],
    type: "book",
    description: "An exploration of the Russian Civil Wars and their impact on the world."
  },
  {
    id: '149',
    title: "The Golden Rhinoceros: History of the African Middle Ages",
    author: "Francois-Xavier Fauvelle",
    publishedYear: 2018,
    link: "https://www.goodreads.com/search?q=The%20Golden%20Rhinoceros+Francois-Xavier%20Fauvelle",
    tags: ["history", "africa", "book"],
    type: "book",
    description: "An exploration of the history of the African Middle Ages and its impact on the world."
  },
  {
    id: '150',
    title: "Linear Algebra and Learning from Data",
    author: "Gilbert Strang",
    publishedYear: 2019,
    link: "https://www.goodreads.com/search?q=Linear%20Algebra%20and%20Learning%20from%20Data+Gilbert%20Strang",
    tags: ["mathematics", "linear algebra", "data science", "book"],
    type: "book",
    description: "A guide to linear algebra and its applications in learning from data."
  },
  {
    id: '151',
    title: "How to Solve it",
    author: "G. Polya",
    publishedYear: 1945,
    link: "https://www.goodreads.com/search?q=How%20to%20Solve%20it+G.%20Polya",
    tags: ["mathematics", "problem solving", "book"],
    type: "book",
    description: "A guide to problem-solving techniques in mathematics."
  },
  {
    id: '152',
    title: "Made in Korea: Chung Ju Yung and the Rise of Hyundai",
    author: "Richard M. Steers",
    publishedYear: 1998,
    link: "https://www.goodreads.com/search?q=Made%20in%20Korea+Richard%20M.%20Steers",
    tags: ["business", "biography", "book"],
    type: "book",
    description: "An exploration of the life of Chung Ju Yung and the rise of Hyundai."
  },
  {
    id: '153',
    title: "Never Forget National Humiliation: Historical Memory in Chinese Politics and Foreign Relations",
    author: "Zheng Wang",
    publishedYear: 2012,
    link: "https://www.goodreads.com/search?q=Never%20Forget%20National%20Humiliation+Zheng%20Wang",
    tags: ["politics", "international relations", "book"],
    type: "book",
    description: "An exploration of historical memory in Chinese politics and foreign relations and its implications for world politics."
  },
  {
    id: '154',
    title: "Does the Elephant Dance?: Contemporary Indian Foreign Policy",
    author: "David M. Malone",
    publishedYear: 2012,
    link: "https://www.goodreads.com/search?q=Does%20the%20Elephant%20Dance%3F+David%20M.%20Malone",
    tags: ["politics", "international relations", "book"],
    type: "book",
    description: "An exploration of contemporary Indian foreign policy and its implications for world politics."
  },
  {
    id: '155',
    title: "The Positive Background of Hindu Sociology",
    author: "Benoy Kumar Sarkar",
    publishedYear: 1914,
    link: "https://www.goodreads.com/search?q=The%20Positive%20Background%20of%20Hindu%20Sociology+Benoy%20Kumar%20Sarkar",
    tags: ["sociology", "religion", "book"],
    type: "book",
    description: "An exploration of the positive background of Hindu sociology and its implications for religion and society."
  },
  {
    id: '156',
    title: "Hindu Achievements in Exact Science: A Study in the History of Scientific Development",
    author: "Benoy Kumar Sarkar",
    publishedYear: 1918,
    link: "https://www.goodreads.com/search?q=Hindu%20Achievements%20in%20Exact%20Science+Benoy%20Kumar%20Sarkar",
    tags: ["science", "history", "book"],
    type: "book",
    description: "A study of Hindu achievements in exact science and their impact on the history of scientific development."
  },
  {
    id: '157',
    title: "Chinese religion through Hindu eyes; a study in the tendencies of Asiatic mentality",
    author: "Benoy Kumar Sarkar",
    publishedYear: 1916,
    link: "https://www.goodreads.com/search?q=Chinese%20religion%20through%20Hindu%20eyes+Benoy%20Kumar%20Sarkar",
    tags: ["religion", "sociology", "book"],
    type: "book",
    description: "A study of Chinese religion through Hindu eyes and its implications for Asiatic mentality."
  },
  {
    id: '158',
    title: "Xi Jinping: The Governance of China",
    author: "Xi Jinping",
    publishedYear: 2018,
    link: "https://www.goodreads.com/search?q=Xi%20Jinping%3A%20The%20Governance%20of%20China+Xi%20Jinping",
    tags: ["politics", "china", "book"],
    type: "book",
    description: "An exploration of the governance of China under Xi Jinping and its implications for the world."
  },
  {
    id: '159',
    title: "The Tyrants: 2500 yrs of Absolute Power and Corruption",
    author: "Clive Foss",
    publishedYear: 2006,
    link: "https://www.goodreads.com/search?q=The%20Tyrants%3A%202500%20yrs%20of%20Absolute%20Power%20and%20Corruption+Clive%20Foss",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of the history of tyrants and their impact on the world."
  },
  {
    id: '160',
    title: "The Secret History of Mongols: The origin of chingis khan",
    author: "Paul Kahn",
    publishedYear: 1993,
    link: "https://www.goodreads.com/search?q=The%20Secret%20History%20of%20Mongols+Paul%20Kahn",
    tags: ["history", "mongolia", "book"],
    type: "book",
    description: "An exploration of the secret history of the Mongols and the origin of Chingis Khan."
  },
  {
    id: '161',
    title: "Rise and Kill First",
    author: "Ronen Bergman",
    publishedYear: 2018,
    link: "https://www.goodreads.com/search?q=Rise%20and%20Kill%20First+Ronen%20Bergman",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of the history of targeted assassinations and their impact on the world."
  },
  {
    id: '162',
    title: "The MitroKhin The KGB in the World",
    author: "Christopher Andrew, Vasili Mitrokin",
    publishedYear: 1999,
    link: "https://www.goodreads.com/search?q=The%20MitroKhin+Christopher%20Andrew%2C%20Vasili%20Mitrokin",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of the KGB and its impact on the world, as revealed in the Mitrokhin Archive."
  },
  {
    id: '163',
    title: "By Way of Deception: The Making of a Mossad Officer",
    author: "Victor Ostrovsky",
    publishedYear: 1990,
    link: "https://www.goodreads.com/search?q=By%20Way%20of%20Deception+Victor%20Ostrovsky",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of the making of a Mossad officer and the role of deception in intelligence operations."
  },
  {
    id: '164',
    title: "How China Escaped poverty trap",
    author: "Yuen Yuen Ang",
    publishedYear: 2016,
    link: "https://www.goodreads.com/search?q=How%20China%20Escaped%20poverty%20trap+Yuen%20Yuen%20Ang",
    tags: ["economics", "china", "book"],
    type: "book",
    description: "An exploration of how China escaped the poverty trap and its implications for economics and development."
  },
  {
    id: '165',
    title: "Economics of Development",
    author: "A.P. Thirlwall and Penelope Pacheo-Lopez",
    publishedYear: 2017,
    link: "https://www.goodreads.com/search?q=Economics%20of%20Development+A.P.%20Thirlwall%20and%20Penelope%20Pacheo-Lopez",
    tags: ["economics", "development", "book"],
    type: "book",
    description: "A comprehensive guide to the economics of development and its implications for the world."
  },
  {
    id: '166',
    title: "The Economic Consequences of US mobilization for the second world war",
    author: "Alexander J. Field",
    publishedYear: 2011,
    link: "https://www.goodreads.com/search?q=The%20Economic%20Consequences%20of%20US%20mobilization+Alexander%20J.%20Field",
    tags: ["economics", "history", "book"],
    type: "book",
    description: "An exploration of the economic consequences of US mobilization for the Second World War."
  },
  {
    id: '167',
    title: "Why Australia Prospered",
    author: "Ian W. Mclean",
    publishedYear: 2013,
    link: "https://www.goodreads.com/search?q=Why%20Australia%20Prospered+Ian%20W.%20Mclean",
    tags: ["economics", "history", "book"],
    type: "book",
    description: "An exploration of why Australia prospered and its implications for economics and development."
  },
  {
    id: '168',
    title: "The Rise and Fall of American Growth",
    author: "Robert J. Gordon",
    publishedYear: 2016,
    link: "https://www.goodreads.com/search?q=The%20Rise%20and%20Fall%20of%20American%20Growth+Robert%20J.%20Gordon",
    tags: ["economics", "history", "book"],
    type: "book",
    description: "An exploration of the rise and fall of American growth and its implications for economics and development."
  },
  {
    id: '169',
    title: "Fully Grown- Why a stagnant economy is a sign of success",
    author: "Deitrich Vollrath",
    publishedYear: 2020,
    link: "https://www.goodreads.com/search?q=Fully%20Grown+Deitrich%20Vollrath",
    tags: ["economics", "development", "book"],
    type: "book",
    description: "An exploration of why a stagnant economy can be a sign of success and its implications for economics and development."
  },
  {
    id: '170',
    title: "The Power of Creative Destruction",
    author: "Philippe Aghion, Celine Antonin, Simon Bunel",
    publishedYear: 2021,
    link: "https://www.goodreads.com/search?q=The%20Power%20of%20Creative%20Destruction+Philippe%20Aghion%2C%20Celine%20Antonin%2C%20Simon%20Bunel",
    tags: ["economics", "development", "book"],
    type: "book",
    description: "An exploration of the power of creative destruction and its implications for economics and development."
  },
  {
    id: '171',
    title: "Creating a Learning Society",
    author: "Joseph E. Stiglitz and Bruce C. Greenwald",
    publishedYear: 2014,
    link: "https://www.goodreads.com/search?q=Creating%20a%20Learning%20Society+Joseph%20E.%20Stiglitz%20and%20Bruce%20C.%20Greenwald",
    tags: ["economics", "development", "book"],
    type: "book",
    description: "An exploration of the creation of a learning society and its implications for economics and development."
  },
  {
    id: '172',
    title: "GDP A Brief but Affectionate History",
    author: "Diane Coyle",
    publishedYear: 2014,
    link: "https://www.goodreads.com/search?q=GDP%20A%20Brief%20but%20Affectionate%20History+Diane%20Coyle",
    tags: ["economics", "history", "book"],
    type: "book",
    description: "A brief but affectionate history of GDP and its implications for economics and development."
  },
  {
    id: '173',
    title: "An Economist's lessons on Happiness",
    author: "Richard A. Easterlin",
    publishedYear: 2010,
    link: "https://www.goodreads.com/search?q=An%20Economist's%20lessons%20on%20Happiness+Richard%20A.%20Easterlin",
    tags: ["economics", "happiness", "book"],
    type: "book",
    description: "An exploration of an economist's lessons on happiness and its implications for economics and development."
  },
  {
    id: '174',
    title: "The Scynthian Empire",
    author: "Christopher I. Beckwith",
    publishedYear: 2009,
    link: "https://www.goodreads.com/search?q=The%20Scynthian%20Empire+Christopher%20I.%20Beckwith",
    tags: ["history", "empire", "book"],
    type: "book",
    description: "An exploration of the Scynthian Empire and its impact on the world."
  },
  {
    id: '175',
    title: "Never Split the Difference",
    author: "Chriss Voss",
    publishedYear: 2016,
    link: "https://www.goodreads.com/search?q=Never%20Split%20the%20Difference+Chriss%20Voss",
    tags: ["business", "negotiation", "book"],
    type: "book",
    description: "A guide to negotiation and its applications in business and life."
  },
  {
    id: '176',
    title: "War Is A Racket",
    author: "Gen. Smedley Butler",
    publishedYear: 1935,
    link: "https://www.goodreads.com/search?q=War%20Is%20A%20Racket+Gen.%20Smedley%20Butler",
    tags: ["history", "war", "book"],
    type: "book",
    description: "An exploration of the idea that war is a racket and its implications for the world."
  },
  {
    id: '177',
    title: "White Holes: Inside the Horizon",
    author: "Carlo Rovelli",
    publishedYear: 2021,
    link: "https://www.goodreads.com/search?q=White%20Holes+Carlo%20Rovelli",
    tags: ["science", "physics", "book"],
    type: "book",
    description: "An exploration of white holes and their implications for science and physics."
  },
  {
    id: '178',
    title: "The Hard thing about hard things: Building a Business when there are no easy answers",
    author: "Ben Horowitz",
    publishedYear: 2014,
    link: "https://www.goodreads.com/search?q=The%20Hard%20thing%20about%20hard%20things+Ben%20Horowitz",
    tags: ["business", "entrepreneurship", "book"],
    type: "book",
    description: "A guide to building a business when there are no easy answers and its implications for entrepreneurship."
  },
  {
    id: '179',
    title: "R.N. Kao: Gentleman Spymaster",
    author: "Nitin A. Gokhale",
    publishedYear: 2019,
    link: "https://www.goodreads.com/search?q=R.N.%20Kao+Nitin%20A.%20Gokhale",
    tags: ["history", "biography", "book"],
    type: "book",
    description: "An exploration of the life and work of R.N. Kao, the gentleman spymaster."
  },
  {
    id: '180',
    title: "Chip War: The Fight for the World's Critical Technology",
    author: "Chris Miller",
    publishedYear: 2021,
    link: "https://www.goodreads.com/search?q=Chip%20War+Chris%20Miller",
    tags: ["technology", "business", "book"],
    type: "book",
    description: "An exploration of the fight for the world's critical technology and its implications for technology and business."
  },
  {
    id: '181',
    title: "Godfather of the Kremlin: Boris Berezovsky and the Looting of Russia",
    author: "Paul Klebnikov",
    publishedYear: 2000,
    link: "https://www.goodreads.com/search?q=Godfather%20of%20the%20Kremlin+Paul%20Klebnikov",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of the life and work of Boris Berezovsky and the looting of Russia."
  },
  {
    id: '182',
    title: "Brave New World: 'A Masterpiece of Speculation'",
    author: "Margaret Atwood",
    publishedYear: 1932,
    link: "https://www.goodreads.com/search?q=Brave%20New%20World+Margaret%20Atwood",
    tags: ["fiction", "dystopia", "book"],
    type: "book",
    description: "A masterpiece of speculation and its implications for fiction and dystopia."
  },
  {
    id: '183',
    title: "Plato and a Platypus Walk into a Bar…: Understanding Philosophy Through Jokes",
    author: "Thomas Cathcart, Daniel Klein",
    publishedYear: 2007,
    link: "https://www.goodreads.com/search?q=Plato%20and%20a%20Platypus%20Walk%20into%20a%20Bar%E2%80%A6+Thomas%20Cathcart%2C%20Daniel%20Klein",
    tags: ["philosophy", "humor", "book"],
    type: "book",
    description: "An exploration of philosophy through jokes and its implications for humor and philosophy."
  },
  {
    id: '184',
    title: "The Good Life: Lessons from the world's longest scientific study of Happiness",
    author: "Robert Waldinger, MD, Marc Shulz, PhD",
    publishedYear: 2023,
    link: "https://www.goodreads.com/search?q=The%20Good%20Life+Robert%20Waldinger%2C%20MD%2C%20Marc%20Shulz%2C%20PhD",
    tags: ["psychology", "happiness", "book"],
    type: "book",
    description: "Lessons from the world's longest scientific study of happiness and their implications for psychology and happiness."
  },
  {
    id: '185',
    title: "Same as Ever: A Guide to What Never Changes",
    author: "Morgan Housel",
    publishedYear: 2023,
    link: "https://www.goodreads.com/search?q=Same%20as%20Ever+Morgan%20Housel",
    tags: ["self-help", "philosophy", "book"],
    type: "book",
    description: "A guide to what never changes and its implications for self-help and philosophy."
  },
  {
    id: '186',
    title: "How to Change your Mind",
    author: "Michael Pollan",
    publishedYear: 2018,
    link: "https://www.goodreads.com/search?q=How%20to%20Change%20your%20Mind+Michael%20Pollan",
    tags: ["psychology", "self-help", "book"],
    type: "book",
    description: "An exploration of how to change your mind and its implications for psychology and self-help."
  },
  {
    id: '187',
    title: "Awe: The new science of Everyday Wonder and How It can Transform Your Life",
    author: "Dacher Keltner",
    publishedYear: 2023,
    link: "https://www.goodreads.com/search?q=Awe+Dacher%20Keltner",
    tags: ["psychology", "self-help", "book"],
    type: "book",
    description: "An exploration of the new science of everyday wonder and how it can transform your life."
  },
  {
    id: '188',
    title: "How to Know a Person: The Art of seeing Others Deeply and Being Deeply Seen",
    author: "David Brooks",
    publishedYear: 2023,
    link: "https://www.goodreads.com/search?q=How%20to%20Know%20a%20Person+David%20Brooks",
    tags: ["psychology", "self-help", "book"],
    type: "book",
    description: "An exploration of the art of seeing others deeply and being deeply seen and its implications for psychology and self-help."
  },
  {
    id: '189',
    title: "The Road to Character",
    author: "David Brooks",
    publishedYear: 2015,
    link: "https://www.goodreads.com/search?q=The%20Road%20to%20Character+David%20Brooks",
    tags: ["psychology", "self-help", "book"],
    type: "book",
    description: "An exploration of the road to character and its implications for psychology and self-help."
  },
  {
    id: '190',
    title: "How Civil Wars Start: and How to Stop Them",
    author: "Barbara F. Walter",
    publishedYear: 2022,
    link: "https://www.goodreads.com/search?q=How%20Civil%20Wars%20Start+Barbara%20F.%20Walter",
    tags: ["politics", "history", "book"],
    type: "book",
    description: "An exploration of how civil wars start and how to stop them and its implications for politics and history."
  },
  {
    id: '191',
    title: "The Master and Margarita",
    author: "Mikhail Bulgakov",
    publishedYear: 1967,
    link: "https://www.goodreads.com/search?q=The%20Master%20and%20Margarita+Mikhail%20Bulgakov",
    tags: ["fiction", "classic", "book"],
    type: "book",
    description: "A classic novel exploring the themes of good and evil and its implications for fiction."
  },
  {
    id: '192',
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedYear: 1954,
    link: "https://www.goodreads.com/search?q=The%20Lord%20of%20the%20Rings+J.R.R.%20Tolkien",
    tags: ["fiction", "fantasy", "book"],
    type: "book",
    description: "A classic fantasy novel exploring the themes of good and evil and its implications for fiction."
  },
  {
    id: '193',
    title: "Discourses on Livy",
    author: "Niccolo Machiavelli",
    publishedYear: 1531,
    link: "https://www.goodreads.com/search?q=Discourses%20on%20Livy+Niccolo%20Machiavelli",
    tags: ["politics", "philosophy", "book"],
    type: "book",
    description: "An exploration of the discourses on Livy and its implications for politics and philosophy."
  },
  {
    id: '194',
    title: "The Diamond Age or, A Young Lady's Illustrated Primer",
    author: "Neal Stephenson",
    publishedYear: 1995,
    link: "https://www.goodreads.com/search?q=The%20Diamond%20Age+Neal%20Stephenson",
    tags: ["fiction", "science fiction", "book"],
    type: "book",
    description: "A science fiction novel exploring the themes of technology and society and its implications for fiction."
  },
  {
    id: '195',
    title: "The Great Illusion: A Study of the Relation of Military Power to National Advantage",
    author: "Norman Angell",
    publishedYear: 1910,
    link: "https://www.goodreads.com/search?q=The%20Great%20Illusion+Norman%20Angell",
    tags: ["politics", "history", "book"],
    type: "book",
    description: "A study of the relation of military power to national advantage and its implications for politics and history."
  },
  {
    id: '196',
    title: "The Sovereign Individual: Mastering the Transition to the Information Age",
    author: "James Dale Davidson, Lord William Rees-Mogg",
    publishedYear: 1997,
    link: "https://www.goodreads.com/search?q=The%20Sovereign%20Individual+James%20Dale%20Davidson%2C%20Lord%20William%20Rees-Mogg",
    tags: ["politics", "technology", "book"],
    type: "book",
    description: "An exploration of the sovereign individual and mastering the transition to the information age and its implications for politics and technology."
  },
  {
    id: '197',
    title: "Life After Google: The fall of Big data and the rise of the Blockchain Economy",
    author: "George Gilder",
    publishedYear: 2018,
    link: "https://www.goodreads.com/search?q=Life%20After%20Google+George%20Gilder",
    tags: ["technology", "economics", "book"],
    type: "book",
    description: "An exploration of life after Google and the fall of big data and the rise of the blockchain economy and its implications for technology and economics."
  },
  {
    id: '198',
    title: "Atlas Struggled",
    author: "Ayn Rand",
    publishedYear: 1957,
    link: "https://www.goodreads.com/search?q=Atlas%20Struggled+Ayn%20Rand",
    tags: ["fiction", "philosophy", "book"],
    type: "book",
    description: "A philosophical novel exploring the themes of individualism and capitalism and its implications for fiction."
  },
  {
    id: '199',
    title: "Originals: How Non-Conformists Move the World",
    author: "Adam Grant",
    publishedYear: 2016,
    link: "https://www.goodreads.com/search?q=Originals+Adam%20Grant",
    tags: ["business", "psychology", "book"],
    type: "book",
    description: "An exploration of how non-conformists move the world and its implications for business and psychology."
  },
  {
    id: '200',
    title: "Greek Homosexuality",
    author: "K.J. Dover",
    publishedYear: 1978,
    link: "https://www.goodreads.com/search?q=Greek%20Homosexuality+K.J.%20Dover",
    tags: ["history", "sociology", "book"],
    type: "book",
    description: "An exploration of Greek homosexuality and its implications for history and sociology."
  },
  {
    id: '201',
    title: "Currency Wars: The Making of Next Global Crisis",
    author: "James Rickards",
    publishedYear: 2011,
    link: "https://www.goodreads.com/search?q=Currency%20Wars+James%20Rickards",
    tags: ["economics", "finance", "book"],
    type: "book",
    description: "An exploration of currency wars and the making of the next global crisis and its implications for economics and finance."
  },
  {
    id: '202',
    title: "The Death of Money: The Coming Collapse of International Monetary System",
    author: "James Rickards",
    publishedYear: 2014,
    link: "https://www.goodreads.com/search?q=The%20Death%20of%20Money+James%20Rickards",
    tags: ["economics", "finance", "book"],
    type: "book",
    description: "An exploration of the death of money and the coming collapse of the international monetary system and its implications for economics and finance."
  },
  {
    id: '203',
    title: "The Lessons of History",
    author: "Will and Ariel Durant",
    publishedYear: 1968,
    link: "https://www.goodreads.com/search?q=The%20Lessons%20of%20History+Will%20and%20Ariel%20Durant",
    tags: ["history", "philosophy", "book"],
    type: "book",
    description: "An exploration of the lessons of history and their implications for history and philosophy."
  },
  {
    id: '204',
    title: "Rtu Vidya: Ancient Science Behind Menstrual Practices",
    author: "Sinu Joseph",
    publishedYear: 2020,
    link: "https://www.goodreads.com/search?q=Rtu%20Vidya+Sinu%20Joseph",
    tags: ["science", "sociology", "book"],
    type: "book",
    description: "An exploration of the ancient science behind menstrual practices and its implications for science and sociology."
  },
  {
    id: '205',
    title: "Chaos: Charles Manson, the CIA and the Secret History of the Sixties",
    author: "Tom O' Neil",
    publishedYear: 2019,
    link: "https://www.goodreads.com/search?q=Chaos+Tom%20O'%20Neil",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of the chaos of the sixties and the secret history of Charles Manson, the CIA, and its implications for history and politics."
  },
  {
    id: '206',
    title: "Manifesto for Breaking the Financial Slavery to Interest",
    author: "Gottfried Feder",
    publishedYear: 1919,
    link: "https://www.goodreads.com/search?q=Manifesto%20for%20Breaking%20the%20Financial%20Slavery%20to%20Interest+Gottfried%20Feder",
    tags: ["economics", "politics", "book"],
    type: "book",
    description: "An exploration of the manifesto for breaking the financial slavery to interest and its implications for economics and politics."
  },
  {
    id: '207',
    title: "The Myth of the Twentieth Century",
    author: "Alfred Rosenberg",
    publishedYear: 1930,
    link: "https://www.goodreads.com/search?q=The%20Myth%20of%20the%20Twentieth%20Century+Alfred%20Rosenberg",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of the myth of the twentieth century and its implications for history and politics."
  },
  {
    id: '208',
    title: "Hitler's Official Programme and The Fundamental Ideas",
    author: "Gottfried Feder",
    publishedYear: 1927,
    link: "https://www.goodreads.com/search?q=Hitler's%20Official%20Programme+Gottfried%20Feder",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of Hitler's official programme and the fundamental ideas and their implications for history and politics."
  },
  {
    id: '209',
    title: "FDR and the HOLOCAUST",
    author: "Verne W. Newton",
    publishedYear: 1996,
    link: "https://www.goodreads.com/search?q=FDR%20and%20the%20HOLOCAUST+Verne%20W.%20Newton",
    tags: ["history", "politics", "book"],
    type: "book",
    description: "An exploration of FDR and the Holocaust and its implications for history and politics."
  },
  {
    id: '210',
    title: "The Goal: A Process of Ongoing Improvement",
    author: "Eliyahu M. Goldratt, Jeff Cox, David Whitford",
    publishedYear: 1984,
    link: "https://www.goodreads.com/search?q=The%20Goal+Eliyahu%20M.%20Goldratt%2C%20Jeff%20Cox%2C%20David%20Whitford",
    tags: ["business", "management", "book"],
    type: "book",
    description: "A guide to the process of ongoing improvement and its implications for business and management."
  },
  {
    id: '211',
    title: "The BODY ELECTRIC",
    author: "Robert Becker, Gary Selden",
    publishedYear: 1985,
    link: "https://www.goodreads.com/search?q=The%20BODY%20ELECTRIC+Robert%20Becker%2C%20Gary%20Selden",
    tags: ["science", "medicine", "book"],
    type: "book",
    description: "An exploration of the body electric and its implications for science and medicine."
  },
  {
    id: '212',
    title: "Earthing: The Most Important Health Discovery Ever!",
    author: "Clinton Ober, Stephen T. Sinatra M.D., Martin Zucker",
    publishedYear: 2010,
    link: "https://www.goodreads.com/search?q=Earthing+Clinton%20Ober%2C%20Stephen%20T.%20Sinatra%20M.D.%2C%20Martin%20Zucker",
    tags: ["health", "medicine", "book"],
    type: "book",
    description: "An exploration of earthing and its implications for health and medicine."
  }
];

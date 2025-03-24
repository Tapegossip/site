
export interface Essay {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const essays: Essay[] = [
  {
    id: '1',
    title: 'Civilizational Primitives',
    slug: 'civilizational-primitives',
    date: '2022-11-16',
    excerpt: 'At the dawn of civilization, with the introduction of the agricultural revolution, humans needed to coordinate in larger numbers...',
    content: `
      <p>At the dawn of civilization, with the introduction of the agricultural revolution, humans needed to coordinate in larger numbers. This shift from hunter-gatherer societies to agricultural settlements marked a fundamental transformation in how humans organized themselves.</p>
      
      <p>The development of writing systems, laws, and hierarchical governance structures became necessary to manage increasingly complex social arrangements. These "civilizational primitives" — foundational technologies and social innovations — enabled humans to scale their societies beyond the Dunbar number (approximately 150 individuals) that had previously limited the size of functioning social groups.</p>
      
      <p>As we consider the future of human coordination in the digital age, understanding these historical primitives provides valuable insights. Today's blockchain technologies, digital governance systems, and global communication networks represent a new layer of civilizational primitives that may fundamentally reshape how we coordinate at scale.</p>
    `,
    tags: ['history', 'civilization', 'technology', 'coordination']
  },
  {
    id: '2',
    title: 'Investing in Synthesis',
    slug: 'investing-in-synthesis',
    date: '2024-03-15',
    excerpt: 'Coming soon...',
    content: 'Coming soon...',
    tags: ['investing', 'knowledge', 'synthesis']
  },
  {
    id: '3',
    title: 'Why Learn Compilers',
    slug: 'why-learn-compilers',
    date: '2024-03-15',
    excerpt: 'Coming soon...',
    content: 'Coming soon...',
    tags: ['programming', 'compilers', 'computer science']
  }
];

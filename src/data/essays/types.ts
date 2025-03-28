export interface Essay {
    id: string;
    mainTitle: string;
    subtitle?: string;
    title: string; // We'll keep this for backward compatibility
    slug: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
  }
  
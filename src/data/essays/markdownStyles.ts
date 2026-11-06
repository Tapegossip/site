/**
 * Classes added to tags in essay HTML at build time (see vite-markdown.ts).
 * Kept under src/ so Tailwind sees these class names and generates them.
 */
export const essayTagClasses: Record<string, string> = {
  h2: 'text-xl font-bold mt-8 mb-4',
  h3: 'text-lg font-bold mt-6 mb-3',
  ul: 'list-disc pl-6 my-4',
  ol: 'list-decimal pl-6 my-4',
};

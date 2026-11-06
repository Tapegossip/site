/// <reference types="vite/client" />

declare module '*.md' {
  const essay: { meta: Record<string, unknown>; html: string };
  export default essay;
}

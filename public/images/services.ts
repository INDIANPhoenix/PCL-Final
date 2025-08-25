// Re-export the canonical image map so legacy imports keep working.
// NOTE: this file lives in `public/images` only to satisfy old paths;
//       the single source of truth remains `lib/service-images.ts`.

export { serviceImages } from "../../lib/service-images"

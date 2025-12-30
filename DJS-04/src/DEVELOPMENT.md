Developer notes — TalentSpace

Quick tips & suggestions:

- Routing: Install `react-router-dom` and wrap `App` with a `<BrowserRouter>`; add `src/pages` for multiple pages (Home, About, Careers, Cases).

- Forms: Hook `Contact` to a serverless function (Netlify Functions, Vercel Serverless, or an AWS Lambda) to avoid exposing email credentials.

- Production build & deploy:
  - `npm run build` produces `/dist`.
  - Host on Vercel / Netlify / Cloudflare Pages. Use environment variables for keys.

- Accessibility & SEO:
  - Use proper `aria` attributes and semantic elements (role="region", alt text, labels).
  - Add Open Graph meta tags for social sharing in `index.html`.

- Linting & formatting:
  - Add `eslint` + `prettier` and a basic config to maintain code quality.

- Tests:
  - Add `vitest` + `@testing-library/react` for unit/interaction tests.

- Performance:
  - Optimize images (svgs for logos, compressed rasters).
  - Consider critical CSS or CSS splitting for large sites.

- Observability:
  - Add Sentry or LogRocket for error monitoring and a simple analytics tool (Plausible/GA).

- Local debugging:
  - Vite dev server runs on `http://localhost:5174/` (or next available port).
  - Use the browser's React DevTools and open the console to see `console.log` calls from forms.

If you want, I can:
- Add `react-router` and scaffold the `/about` and `/careers` pages.
- Convert the project to TypeScript (safer for production).
- Add GitHub Actions for CI and automatic deploy to Vercel.

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const bioRoutes = new Set([
  '/bio',
  '/bio/',
  '/bio/go/portfolio',
  '/bio/go/portfolio/',
  '/bio/go/linkedin',
  '/bio/go/linkedin/',
  '/bio/go/github',
  '/bio/go/github/',
  '/bio/go/email',
  '/bio/go/email/',
  '/bio/go/role-junino',
  '/bio/go/role-junino/',
]);

function bioStaticRoutes() {
  return {
    name: 'bio-static-routes',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        if (!request.url) {
          next();
          return;
        }

        const pathname = request.url.split('?')[0];
        if (!bioRoutes.has(pathname)) {
          next();
          return;
        }

        const routePath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
        const indexPath = routePath === '/bio'
          ? 'public/bio/index.html'
          : `public${routePath}/index.html`;

        try {
          const html = await readFile(resolve(server.config.root, indexPath), 'utf8');
          response.setHeader('Content-Type', 'text/html; charset=utf-8');
          response.end(await server.transformIndexHtml(pathname, html));
        } catch {
          next();
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [bioStaticRoutes()],
});

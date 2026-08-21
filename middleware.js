/**
 * Markdown content negotiation for AI agents (AIScan C1).
 * Serves /index.md when the client sends Accept: text/markdown or ?format=md.
 * A rewrite is required because Vercel would otherwise prefer index.html.
 */
export const config = {
  matcher: ['/', '/index.html'],
};

export default function middleware(request) {
  const url = new URL(request.url);
  const accept = (request.headers.get('accept') || '').toLowerCase();
  const wantsMarkdown =
    accept.includes('text/markdown') || url.searchParams.get('format') === 'md';

  if (!wantsMarkdown) return;

  const destination = new URL('/index.md', request.url);
  destination.search = '';

  return new Response(null, {
    headers: {
      'x-middleware-rewrite': destination.toString(),
      'content-type': 'text/markdown; charset=utf-8',
      vary: 'Accept',
    },
  });
}

import createMiddleware from 'next-intl/middleware';
import { routing } from './navigation';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except internal Next.js routes, API routes, and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

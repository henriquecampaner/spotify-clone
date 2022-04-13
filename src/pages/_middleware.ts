import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: any) {
  const token = await getToken({
    req,
    secret: process.env.JWT_SECRET || '',
  });

  const { pathname, origin } = req.nextUrl;

  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  if (!token && pathname !== '/login') {
    return NextResponse.redirect(`${origin}/login`);
  }
}

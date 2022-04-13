/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  publicRuntimeConfig: {
    // Will be available on both server and client
    nextAuthUrl: process.env.NEXTAUTH_URL,
    publicClientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET || '',
    publicClientId: process.env.NEXT_PUBLIC_CLIENT_ID || '',
    jwtSecret: process.env.JWT_SECRET || '',
  },
};

module.exports = nextConfig;

import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify';

import { configEnv, LOGIN_URL, spotifyApi } from '../../../config/spotify';

const refreshAccessToken = async (token: JWT) => {
  try {
    spotifyApi.setAccessToken(token.acessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    return {
      ...token,
      acessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + Number(refreshedToken.expires_in) * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error(error);

    return {
      ...token,
      error: 'RefreshTokenError',
    };
  }
};

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: configEnv.publicClientId,
      clientSecret: configEnv.publicClientSecret,
      authorization: LOGIN_URL,
    }),
  ],
  secret: configEnv.jwtSecret,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // @ts-ignore
    async jwt({ token, account, user }) {
      //initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: Number(account.expires_at) * 1000,
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log('TOKEN VALID');
        return token;
      }

      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      // @ts-ignore
      session.user.acessToken = token.accessToken;
      // @ts-ignore
      session.user.refreshToken = token.refreshToken;
      // @ts-ignore
      session.user.username = token.username;

      return session;
    },
  },
});
